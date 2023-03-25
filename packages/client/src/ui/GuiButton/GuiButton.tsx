import './GuiButton.scss';
import React, { FC, memo, ReactElement } from 'react';

type GuiButtonProps = {
  type?: 'button' | 'submit';
  btnText: string;
  className?: string;
  onClick?: () => void;
  labelText?: string;
  icon?: string;
};

const GuiButton: FC<GuiButtonProps> = memo(
  ({
    type = 'button',
    btnText,
    onClick,
    className,
    labelText,
    icon
  }): ReactElement => {
    return (
      <button
        className={`gui-button ${className}`}
        type={type}
        onClick={onClick}
        aria-label={labelText}
      >
        {btnText}
        {icon && <img className='gui-button__icon' alt='' src={icon} />}
      </button>
    );
  }
);

export default GuiButton;
