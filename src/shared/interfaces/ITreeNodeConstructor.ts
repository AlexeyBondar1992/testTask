import ITreeNodeData from './ITreeNodeData';
import ITreeNode from './ITreeNode';

type ITreeNodeConstructor<
  T extends ITreeNode = ITreeNode,
  D extends ITreeNodeData = ITreeNodeData
> = new (nodeData: D, parentIds: number[]) => T;

export default ITreeNodeConstructor;
