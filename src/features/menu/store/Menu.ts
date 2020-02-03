import { observable, computed, action } from 'mobx';
import ICategory from '../interfaces/ICategory';
import IItem from '../interfaces/IItem';
import IMenu from '../interfaces/IMenu';
import Tree from '../../../shared/models/Tree';
import ITree from '../../../shared/interfaces/ITree';
import MenuTreeNode from '../models/MenuTreeNode';
import IMenuTreeNode from '../interfaces/IMenuTreeNode';
import IMenuTreeNodeData from '../interfaces/IMenuTreeNodeData';

type OriginalItems = Map<string, IItem>;

class Menu {
  @observable isLoading = true;
  @observable tree: ITree | null = null;
  originalItems: OriginalItems = new Map();
  originalCategories: ICategory[] = [];


  @action setNewData(menuData: IMenu) {
    this.originalCategories = menuData.categories;
    this.originalItems = new Map(menuData.items.map(item => ([item.posRef, item])));
    this.createTree(this.originalCategories, this.originalItems);
  }

  @action private createTree(categories: ICategory[], items: OriginalItems) {
    const treeData: IMenuTreeNodeData[] = categories.map(category => ({
      id: parseInt(category.posRef, 10),
      name: category.name,
      isAvailable: category.isAvailable,
      description: category.description,
      children: category.items.map(itemId => {
        const item = items.get(itemId);

        if (item) {
          return {
            id: parseInt(item.posRef, 10),
            name: item.name,
            isAvailable: item.isAvailable,
            price: item.price,
            description: item.description
          };
        }
      }).filter(item => !!item) as IMenuTreeNodeData[]
    }));
    this.tree = new Tree<IMenuTreeNode, IMenuTreeNodeData>(treeData, MenuTreeNode);
  }
}

export default Menu;
