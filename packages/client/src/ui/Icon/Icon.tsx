import React from 'react';
import './Icon.scss';

const Icon = (props: { img: string }) => {
  return (
    <div className='icon'>
      <img src={props.img} alt='' className='icon__img' />
    </div>
  );
};

export default Icon;
