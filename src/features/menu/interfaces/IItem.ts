import IMenuBase from './IMenuBase';

interface IItem extends IMenuBase {
  price: number | null;
}

export default IItem;
