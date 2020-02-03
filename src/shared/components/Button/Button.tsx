import React from 'react';
import IButtonProps from '../../interfaces/IButtonProps';
import styles from './Button.scss';

const Button: React.FC<IButtonProps> = ({ children, title, ...props }) => {
  const activeClasses = [ styles.button ];

  if (props.className) {
    activeClasses.push(props.className);
    delete props.className;
  }

  return (
    <button
      aria-label={title}
      title={title}
      type='button'
      className={ activeClasses.join(' ') }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
