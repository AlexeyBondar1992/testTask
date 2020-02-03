import CheckboxStatuses from '../constants/checkboxStatuses';
import ITreeNodeData from '../interfaces/ITreeNodeData';
import ITreeNode from "../interfaces/ITreeNode";

class TreeNode implements ITreeNode {
  id: number;
  name: string;
  parentIds: number[];
  childNodes: TreeNode[] = [];
  checkedStatus: CheckboxStatuses;
  private disabled: boolean;

  constructor(nodeData: ITreeNodeData, parentIds: number[]) {
    this.id = nodeData.id;
    this.name = nodeData.name;
    this.disabled = !!nodeData.isDisabled;
    this.parentIds = parentIds;
    this.checkedStatus = !!nodeData.isAvailable ?
      CheckboxStatuses.CHECKED :
      CheckboxStatuses.UNCHECKED;
  }

  get hasChildren() {
    return !!this.childNodes.length;
  }

  get propsToDisplay() {
    return [
      {
        field: 'name' as keyof ITreeNode
      }
    ];
  }

  get uniqueKey() {
    return `${this.parentIds.toString()}${this.id}`;
  }

  get isIndeterminate() {
    return this.checkedStatus === CheckboxStatuses.INDETERMINATE;
  }

  get isChecked() {
    return this.checkedStatus === CheckboxStatuses.CHECKED;
  }

  get checkStatus(): CheckboxStatuses {
    if (this.hasChildren) {
      let status: CheckboxStatuses | null = null;

      for(const child of this.childNodes) {
        if (child.checkStatus === CheckboxStatuses.INDETERMINATE) {
          return CheckboxStatuses.INDETERMINATE;
        } else if (child.checkStatus === CheckboxStatuses.CHECKED) {
          if (status === CheckboxStatuses.UNCHECKED) {
            return CheckboxStatuses.INDETERMINATE;
          } else {
            status = CheckboxStatuses.CHECKED
          }
        } else {
          if (status === CheckboxStatuses.CHECKED) {
            return CheckboxStatuses.INDETERMINATE;
          } else {
            status = CheckboxStatuses.UNCHECKED
          }
        }
      }
      return status as CheckboxStatuses;
    }
    return this.checkedStatus;
  }

  isDisabled(parent?: ITreeNode): boolean {
    if (parent) {
      return parent.isDisabled() || this.disabled;
    }
    return this.disabled;
  }

  toggle() {
    this.checkedStatus === CheckboxStatuses.CHECKED ?
      this.uncheck() :
      this.check();
  }

  check() {
    this.checkedStatus = CheckboxStatuses.CHECKED;
    this.childNodes.forEach(child => child.check());
  }

  uncheck() {
    this.checkedStatus = CheckboxStatuses.UNCHECKED;
    this.childNodes.forEach(child => child.uncheck());
  }

  updateCheckedStatus() {
    this.checkedStatus = this.checkStatus;
  }
}

export default TreeNode;
