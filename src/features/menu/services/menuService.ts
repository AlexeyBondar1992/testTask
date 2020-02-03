import menuData from '../mockData/menuData';
import IMenu from "../interfaces/IMenu";

const menuService = {
  // method mocked
  getMenu () {
    return new Promise<IMenu>(resolve => setTimeout(() => resolve(menuData),1000));
  }
};

export default menuService;
