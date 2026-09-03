import Item from './Item';
import './Item.css';
import { groups, items } from './ListDaddy';
export default {
  component: Item,
};

export const Default = () => {
  return <Item defaultElement={groups[0]} />
};
