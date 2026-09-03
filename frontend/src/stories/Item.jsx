import { useState } from "react"
import { items } from './ListDaddy';
import { groups } from './ListDaddy';

export default function Item({ defaultElement }) {
  const [element, setElement] = useState(defaultElement)
  const [isCardExpanded, setIsCardExpanded] = useState(false)
  const [quantity, setQuantity] = useState(element.quantity)
  const [text, setText] = useState(element.name)
  const textLimit = 8
  const remainingChars = textLimit - 2
  const [isExpanded, setIsExpanded] = useState(false)

  const switchStoreAndHome = (item, inStore) => {
    const newElement = {
      name: element.name,
      quantity: element.quantity,
      acronym: element.acronym,
      ID: element.ID,
      store: [...element.store],
      home: [...element.home]
    }
    if (inStore) {
      newElement.store = newElement.store.filter(e => e.ID !== item.ID)
      newElement.home.push(item)
      setElement(newElement)
    } else {
      newElement.home = newElement.home.filter(e => e.ID !== item.ID)
      newElement.store.push(item)
      setElement(newElement)
    }
  }
  if (isExpanded) {
    return (
      <>
        <div className='expanded card'>
          <div className="groupHead">
            <div className="chevron" onClick={() => { setIsExpanded(!isExpanded) }}> {isExpanded ? <img src="../../images/chevron_down.svg" /> : <img src="../../images/chevron_right.svg" />} </div>
            <div className="text">{element.name.length > textLimit ? element.name.slice(0, (remainingChars - element.name.length)).concat('...') : element.name}</div>
            <div className="minusButton" onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity)}>-</div>
            <div className="quantity">{quantity}</div>
            <div className="plusButton" onClick={() => quantity < 99 ? setQuantity(quantity + 1) : setQuantity(quantity)}>+</div>
          </div>
          <div className='store'>
            <div className='storeAndHomeHeader'>
              <div className='text'>Get from store</div>
              <div className='line'></div>
            </div>
            {...objectsToComponents(element.store, switchStoreAndHome, true)}
          </div>
          <div className='home'>
            <div className='storeAndHomeHeader'>
              <div className='text'>Have at home</div>
              <div className='line'></div>
            </div>
            {...objectsToComponents(element.home, switchStoreAndHome, false)}
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="collapsed card">
          <div className="chevron" onClick={() => { setIsExpanded(!isExpanded) }}> {isExpanded ? <img src="../../images/chevron_down.svg" /> : <img src="../../images/chevron_right.svg" />} </div>
          <div className="text">{element.name.length > textLimit ? element.name.slice(0, (remainingChars - element.name.length)).concat('...') : element.name}</div>
          <div className="minusButton" onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity)}>-</div>
          <div className="quantity">{quantity}</div>
          <div className="plusButton" onClick={() => quantity < 99 ? setQuantity(quantity + 1) : setQuantity(quantity)}>+</div>
        </div>

      </>
    )
  }

}


function GroupedCard({ item, onSwitch, inStore, }) {
  const [quantity, setQuantity] = useState(item.quantity)
  const [text, setText] = useState(findElement(item.ID, items).name)
  const textLimit = 8
  const remainingChars = textLimit - 2
  console.log("inside GroupedCard: item.ID: ", item.ID, " item.quantity: ", item.quantity, " text: ", text, "quantity :", quantity)
  if (findElement(item.ID, items).name !== text) {
    setText(findElement(item.ID, items).name);
    setQuantity(item.quantity)
  }
  return (
    <>
      <div className="groupedCard">
        <div className="storeHomeSwitch" onClick={() => onSwitch(item, inStore)}> {!inStore ? <img src="../../images/move_up.svg" /> : <img src="../../images/move_down.svg" />}</div>
        <div className="groupedText">{text.length > textLimit ? text.slice(0, (remainingChars - text.length)).concat('...') : text}</div>
        <div className="groupedQuantity">{quantity}</div>
      </div>
    </>
  )
}


function findElement(elementID, dataStructure) {
  for (let i = 0; i < dataStructure.length; i++) {
    const element = dataStructure[i];
    if (element.ID === elementID) {
      return element
    }
  }
  throw new Error("Invalid element ID!")
}

function objectsToComponents(arr, onSwitchFunc, isInStore) {
  const components = []
  for (let i = 0; i < arr.length; i++) {
    const arrItem = arr[i];
    console.log("ID: ", arrItem.ID, " Qt: ", arrItem.quantity)
    components.push(<GroupedCard item={arrItem} onSwitch={onSwitchFunc} inStore={isInStore} />)
  }
  return components
}

