import { ReactNode } from 'react';
import { ButtonProps as props } from 'react-html-props';

export interface PProps extends props {
	children: ReactNode;
}