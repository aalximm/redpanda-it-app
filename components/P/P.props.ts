import { ReactNode } from 'react';
import { PProps as props } from 'react-html-props';

export interface PProps extends props {
	children: ReactNode;
}