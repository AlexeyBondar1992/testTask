import React, {ChangeEvent, useState} from 'react';
import Input from '../../../../shared/components/Input/Input';
import Button from '../../../../shared/components/Button/Button';
import IMenuNodeFieldProps from '../../interfaces/IMenuNodeFieldProps';
import styles from './MenuNodeField.scss';

const MenuNodeField: React.FC<IMenuNodeFieldProps> = ({ tree, node, field }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(node[field]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };
  const handleCancel = () => {
    setCurrentValue(node[field]);
    setEditMode(false);
  };

  const handleSave = () => {
    tree.updateNodeField(node, field, currentValue);
    setEditMode(false);
  };

  return (
    node[field] ?
      (
        <div className={styles.menuNodeField}>
          {
            isEditMode ?
              (
                <>
                  <Input value={ currentValue } onChange={ handleChange }/>
                  <Button onClick={ handleCancel }>Cancel</Button>
                  <Button onClick={ handleSave }>Save</Button>
                </>
              ) :
              <span onClick={ () => setEditMode(true) }>{ currentValue }</span>
          }
        </div>
      ) :
      null
  );
};

export default MenuNodeField;
