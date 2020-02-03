import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import menuService from '../../services/menuService';
import Menu from '../../store/Menu';
import Tree from '../../../../shared/components/Tree/Tree';

const menuStore = new Menu();

const MenuTree = observer(() => {
  const getMenu = () => {
    menuService.getMenu()
      .then(menu => menuStore.setNewData(menu))
      .then(() => (window as any).menuStore = menuStore);
  };
  useEffect(getMenu, []);

  return menuStore.tree ?
    <Tree tree={ menuStore.tree } /> :
    menuStore.isLoading ? <div>Loading...</div> : <div>No items</div>;
});

export default MenuTree;
