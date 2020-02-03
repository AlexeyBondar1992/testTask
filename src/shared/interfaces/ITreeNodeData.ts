interface ITreeNodeData {
  id: number;
  name: string;
  isDisabled?: boolean;
  isAvailable?: boolean;
  children?: this[];
}

export default ITreeNodeData;
