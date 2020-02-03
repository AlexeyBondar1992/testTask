import CheckboxStatuses from '../constants/checkboxStatuses';
import ITreeNodeDisplayProps from './ITreeNodeDisplayProps';

interface ITreeNode {
  id: number;
  name: string;
  parentIds: number[];
  childNodes: ITreeNode[];
  checkedStatus: CheckboxStatuses;
  hasChildren: boolean;
  propsToDisplay: ITreeNodeDisplayProps<this>[]
  uniqueKey: string;
  isIndeterminate: boolean;
  isChecked: boolean;
  checkStatus: CheckboxStatuses;
  isDisabled: (parent?: this) => boolean;
  toggle: () => void;
  check: () => void;
  uncheck: () => void;
  updateCheckedStatus: () => void;
}

export default ITreeNode;
