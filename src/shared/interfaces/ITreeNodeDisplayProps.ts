import React from 'react';

interface ITreeNodeDisplayProps<T> {
  field: keyof T,
  component?: React.FC<any>
}

export default ITreeNodeDisplayProps;
