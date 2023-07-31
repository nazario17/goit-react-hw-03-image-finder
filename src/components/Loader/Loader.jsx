import React from 'react';
import { TailSpin } from 'react-loader-spinner'; 
import css from './Loader.module.css';

const Loader = () => {
  return (
      <div className={css.loadercontainer}>
      <TailSpin color="#00BFFF" height={40} width={40} />
    </div>
  );
};

export default Loader;
