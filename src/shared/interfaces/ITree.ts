import ITreeNode from "./ITreeNode";

interface ITree<T extends ITreeNode = ITreeNode> {
  flatNodes: Map<string, T>;
  nodes: T[];
  toggleNode: (node: T) => void;
  updateNodeField: (node: T, field: keyof T, newValue: T[keyof T]) => void;
}

export default ITree;
