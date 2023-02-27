import { ReactNode } from 'react';
import { DivProps } from 'react-html-props';

export interface CardProps extends DivProps {
	children: ReactNode;
}