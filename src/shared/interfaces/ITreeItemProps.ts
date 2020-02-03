import IThreeNode from './ITreeNode';
import ITree from './ITree';

interface IThreeNodeProps {
  tree: ITree;
  node: IThreeNode;
  depth: number;
  updateTree?: () => void;
}

export default IThreeNodeProps;
