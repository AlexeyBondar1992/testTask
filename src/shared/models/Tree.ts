import ITreeNodeData from '../interfaces/ITreeNodeData';
import ITreeNode from '../interfaces/ITreeNode';
import ITree from '../interfaces/ITree';
import ITreeNodeConstructor from '../interfaces/ITreeNodeConstructor';

class Tree <
  T extends ITreeNode = ITreeNode,
  D extends ITreeNodeData = ITreeNodeData
>implements ITree<T> {
  flatNodes = new Map<string, T>();
  nodes: T[] = [];

  constructor(treeData: D[], private treeNodeConstructor: ITreeNodeConstructor<T, D>) {
    this.nodes = this.createNodes(treeData);
  }

  updateNodeField(node: T, field: keyof T, newValue: T[keyof T]) {
    node[field] = newValue;
  }

  toggleNode(node: T) {
    node.toggle();

    if (node.parentIds.length) {
      this.updateParentNodesCheckedStatuses([ ...node.parentIds ]);
    }
  }

  private createNodes(nodesData: D[], parentIds: number[] = []) {
    return nodesData.map(nodeData => {
      const node = new this.treeNodeConstructor(nodeData, parentIds);

      this.flatNodes.set(node.uniqueKey, node);

      if (nodeData.children) {
        node.childNodes = this.createNodes(nodeData.children, node.parentIds.concat(node.id));
      }
      node.updateCheckedStatus();

      return node;
    });
  }

  private updateParentNodesCheckedStatuses(nodeIds: number[]) {
    const parentNodeId = nodeIds.pop();
    const parentNodeUniqueKey = `${nodeIds.toString()}${parentNodeId}`;
    const parentNode = this.flatNodes.get(parentNodeUniqueKey);

    if (parentNode) {
      parentNode.updateCheckedStatus();
      this.updateParentNodesCheckedStatuses(nodeIds);
    }
  }
}

export default Tree;
