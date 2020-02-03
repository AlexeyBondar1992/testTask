import React from 'react';
import styles from './Input.scss';
import IInputProps from '../../interfaces/IInputProps';

const defaultInputType = 'text';

const Input: React.FC<IInputProps> = ({ children, title, type, ...props }) => {
  const activeClasses = [ styles.textInput ];

  if (props.className) {
    activeClasses.push(props.className);
    delete props.className;
  }

  return <input
    { ...props }
    className={ activeClasses.join(' ') }
    type={ type || defaultInputType }
  />;
};

export default Input;
