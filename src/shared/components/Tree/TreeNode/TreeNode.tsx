import React from 'react';
import IThreeNodeProps from '../../../interfaces/ITreeItemProps';
import Checkbox from '../../Checkbox/Checkbox';
import styles from './TreeNode.scss';
import IThreeNode from "../../../interfaces/ITreeNode";

const paddingStepInRem = 1.5;

const TreeNode: React.FC<IThreeNodeProps> = props => {
  const { node, tree, children, updateTree, depth } = props;
  const activeClasses = [ styles.treeNode ];
  const handleClick = () => {
    tree.toggleNode(node);

    if (updateTree) {
      updateTree();
    }
  };

  if (node.hasChildren) {
    activeClasses.push(styles.treeNode__group);
  }

  return (
    <li className={ activeClasses.join(' ') }>
      <div
        className={ styles.treeNodeItem}
        style={ {paddingLeft: `${depth * paddingStepInRem}rem`} }
      >
        <Checkbox
          indeterminate={ node.isIndeterminate }
          onChange={ handleClick }
          checked={ node.isChecked }
          className={ styles.treeNodeItemCheckbox }
        />
        {
          node.propsToDisplay.map(({component, field}) => {
            const key = node.uniqueKey + field;

            return component ?
                React.createElement<{field: keyof IThreeNode}>(component, { ...props, field, key}) :
                <span key={ key }>{ node[field] }</span>;
          })
        }
      </div>
      { children }
    </li>
  );
};

export default TreeNode;
