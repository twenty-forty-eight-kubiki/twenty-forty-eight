import React, { FC, ReactElement } from 'react';
import './TextError.scss';

type TextErrorProps = {
	text: string;
};

const TextError: FC<TextErrorProps> = ({ text }): ReactElement => {
	return <span className='text-error'>{text}</span>;
};

export default TextError;
