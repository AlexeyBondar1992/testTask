import ITreeNode from '../../../shared/interfaces/ITreeNode';
import ITreeNodeDisplayProps from '../../../shared/interfaces/ITreeNodeDisplayProps';

interface IMenuTreeNode extends ITreeNode {
  childNodes: IMenuTreeNode[];
  propsToDisplay: ITreeNodeDisplayProps<this>[];
  price?: number | null;
  description?: string | null;
}

export default IMenuTreeNode;
