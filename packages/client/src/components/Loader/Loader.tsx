import React, { ReactElement } from 'react';
import './Loader.scss';

const Loader = (): ReactElement => {
  return (
    <div className='loader'>
      <div className='loader__cube'>
        <div className='loader__face loader__face--front'>2048</div>
        <div className='loader__face loader__face--back'>512</div>
        <div className='loader__face loader__face--right'>1024</div>
        <div className='loader__face loader__face--left'>256</div>
        <div className='loader__face loader__face--top'>512</div>
        <div className='loader__face loader__face--bottom'>128</div>
      </div>
    </div>
  );
};

export default Loader;
