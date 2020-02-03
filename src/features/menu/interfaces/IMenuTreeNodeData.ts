import ITreeNodeData from '../../../shared/interfaces/ITreeNodeData';

interface IMenuTreeNodeData extends ITreeNodeData {
  price?: number | null;
  description?: string | null;
}

export default IMenuTreeNodeData;
