import ITreeNode from './ITreeNode';
import ITree from './ITree';

interface ITreeProps {
  tree: ITree;
  nodes?: ITreeNode[];
  depth?: number;
  updateTree?: () => void;
}

export default ITreeProps;
