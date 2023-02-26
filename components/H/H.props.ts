import { ReactNode } from 'react';
import { HeadPropsWithoutRef as props } from 'react-html-props';

export interface HProps extends props {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}