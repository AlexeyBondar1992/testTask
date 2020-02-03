import TreeNode from '../../../shared/models/TreeNode';
import ITreeNode from '../../../shared/interfaces/ITreeNode';
import MenuNodeField from '../components/MenuNodeField/MenuNodeField';
import IMenuTreeNode from '../interfaces/IMenuTreeNode';
import IMenuTreeNodeData from '../interfaces/IMenuTreeNodeData';

class MenuTreeNode extends TreeNode implements IMenuTreeNode {
  price: number | null | undefined;
  description: string | null | undefined;
  childNodes: MenuTreeNode[] = [];

  constructor(nodeData: IMenuTreeNodeData, parentIds: number[]) {
    super(nodeData, parentIds);
    this.price = nodeData.price;
    this.description = nodeData.description;
  }

  get propsToDisplay() {
    return [
      {
        field: 'name' as keyof MenuTreeNode,
        component: MenuNodeField
      },
      {
        field: 'description' as keyof MenuTreeNode,
        component: MenuNodeField
      },
      {
        field: 'price' as keyof MenuTreeNode,
        component: MenuNodeField
      }
    ];
  }
}

export default MenuTreeNode;
