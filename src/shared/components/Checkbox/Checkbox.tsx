import React, { useEffect } from 'react';
import ICheckboxProps from '../../interfaces/ICheckboxProps'
import styles from './Checkbox.scss';

const Checkbox: React.FC<ICheckboxProps> = props => {
  let checkbox: HTMLInputElement | null;
  const activeClasses = [ styles.checkbox ];
  const updateDeterminate = () => {
    (checkbox as HTMLInputElement).indeterminate = !!props.indeterminate;
  };
  const checkboxProps = { ...props };

  if (props.className) {
    activeClasses.push(props.className);
  }
  if (props.indeterminate) {
    activeClasses.push(styles.indeterminate);
  }
  delete checkboxProps.indeterminate;
  delete checkboxProps.className;
  useEffect(updateDeterminate, []);
  useEffect(updateDeterminate, [props.indeterminate]);

  return (
    <input
      { ...checkboxProps }
      ref={ (c) => { checkbox = c; } }
      className={ activeClasses.join(' ') }
      type='checkbox'
    />
  );
};

export default Checkbox;
