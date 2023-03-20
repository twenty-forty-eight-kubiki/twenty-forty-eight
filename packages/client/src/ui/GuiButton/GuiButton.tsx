import './GuiButton.scss';
import React, { FC, memo, ReactElement } from 'react';

type GuiButtonProps = {
	type?: 'button' | 'submit';
	btnText: string;
	className?: string;
	onClick?: () => void;
};

const GuiButton: FC<GuiButtonProps> = memo(
	({ type = 'button', btnText, onClick, className }): ReactElement => {
		return (
			<button
				className={`gui-button ${className}`}
				type={type}
				onClick={onClick}
			>
				{btnText}
			</button>
		);
	}
);

export default GuiButton;
