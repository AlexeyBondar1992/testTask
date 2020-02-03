import React, { useState } from 'react';
import ITreeProps from '../../interfaces/ITreeProps';
import TreeNode from './TreeNode/TreeNode';
import styles from './Tree.scss';

const Tree: React.FC<ITreeProps> = ({ tree, nodes, updateTree, depth = 0 }) => {
  const items = nodes || tree.nodes;

  return (
    <ul className={ !depth ? styles.tree : '' }>
      {items.map(node => (
        <TreeNode
          key={ node.uniqueKey }
          tree={ tree }
          node={ node }
          updateTree={ updateTree }
          depth={ depth }
        >
          {node.hasChildren ?
            <Tree
              tree={ tree }
              nodes={ node.childNodes }
              updateTree={ updateTree }
              depth={ depth + 1 }
            /> :
            null}
        </TreeNode>
      ))}
    </ul>
  );
};

const UpdatingTree: React.FC<ITreeProps> = props => {
  const [value, setValue] = useState(0);
  const forceUpdate = () => { setValue(value + 1) };

  return <Tree { ...props } updateTree={ forceUpdate } />;
};

export default UpdatingTree;
