import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import MenuTree from './features/menu/components/MenuTree/MenuTree';

const App = () => {
  return (
    <>
      <h1 className={styles.title}>Hello From App!</h1>
      <MenuTree />
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
