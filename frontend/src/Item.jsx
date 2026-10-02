import { useState } from "react"
import { items } from './ListDaddy';

const textLimit = 26
const remainingChars = textLimit - 3

export default function Item({ defaultElement }) {
  const [element, setElement] = useState(defaultElement)
  const [quantity, setQuantity] = useState(element.quantity)
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
  return (
    <div className='expanded card'>
      <div className="groupHead">
        <div className="chevron" onClick={() => { setIsExpanded(!isExpanded) }}> {isExpanded ? <img src="../../images/chevron_down.svg" /> : <img src="../../images/chevron_right.svg" />} </div>
        <div className="text">{element.name.length > textLimit ? element.name.slice(0, (remainingChars - element.name.length)).concat('...') : element.name}</div>
        {/* 
           See if you can deduplicate this button code. MinusButton and PlusButton are very similar. 

           Also, if you use a button html element, you can disable the button when you don't want to
           allow editing. This means you won't need the ternary + a no-op setQuantity(quantity) call that
           doesn't do anything.
        */}
        <div className="minusButton" onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity)}> {quantity > 0 ? <img src="../../images/Frame 39.svg" /> : <img src="../../images/Minus.svg" className="Grayed" />}</div>
        <div className="quantity">{quantity}</div>
        <div className="plusButton" onClick={() => quantity < 99 ? setQuantity(quantity + 1) : setQuantity(quantity)}>{quantity < 99 ? <img src="../../images/Frame 41.svg" /> : <img src="../../images/Plus.svg" className="Grayed" />}</div>
      </div>
      {isExpanded && <><div className='store'>
        <div className='storeAndHomeHeader'>
          <div className='groupedText'>Get from store</div>
          <div className='line' />
        </div>
        {/* It does feel like we need an ItemsInGroup component or something similar given that the code here and the code below is the same. The only job of this component is to render ItemInGroup or an empty message. */}
        {element.store.length > 0 ? element.store.map(e => <ItemInGroup key={e.ID} item={e} onSwitch={switchStoreAndHome} inStore={true} />) : <div className="placeholder">(Empty for now)</div>}
      </div>
        <div className='home'>
          <div className='storeAndHomeHeader'>
            <div className='groupedText'>Have at home</div>
            <div className='line' />
          </div>
          {element.home.length > 0 ? element.home.map(e => <ItemInGroup key={e.ID} item={e} onSwitch={switchStoreAndHome} inStore={false} />) : <div className="placeholder">(Empty for now)</div>}
        </div></>}
    </div>
  )
}


function ItemInGroup({ item, onSwitch, inStore, }) {
  const [quantity, setQuantity] = useState(item.quantity)
  const name = findElement(item.ID, items).name;
  const [text, setText] = useState(name)
  return (
    // You don't need these fragment tags.
    <>
      <div className="ItemInGroup">
        <div className="storeHomeSwitch" onClick={() => onSwitch(item, inStore)}> {!inStore ? <img src="../../images/move_up.svg" /> : <img src="../../images/move_down.svg" />}</div>
        <div className="groupedText">{text.length > textLimit ? text.slice(0, (remainingChars - text.length)).concat('...') : text}</div>
        <div className="groupedQuantity">{quantity}</div>
      </div>
    </>
  )
}

// You should do this 👇
// replace this with .find on an array
function findElement(elementID, dataStructure) {
  for (let i = 0; i < dataStructure.length; i++) {
    const element = dataStructure[i];
    if (element.ID === elementID) {
      return element
    }
  }
  throw new Error("Invalid element ID!")
}
