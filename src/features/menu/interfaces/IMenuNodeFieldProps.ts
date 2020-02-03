import IMenuTree from './IMenuTree';
import IMenuTreeNode from './IMenuTreeNode';

interface IMenuNodeFieldProps {
  tree: IMenuTree;
  node: IMenuTreeNode;
  field: keyof IMenuTreeNode;
}

export default IMenuNodeFieldProps;
