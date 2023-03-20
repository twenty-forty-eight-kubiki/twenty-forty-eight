import React from 'react';
import { useAppSelector } from '../../hooks/store';
import Header from '../Header/Header';

const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className='layout'>
			<Header />
			<div className='layout__main'>{children}</div>
		</div>
	);
};

export default Layout;
