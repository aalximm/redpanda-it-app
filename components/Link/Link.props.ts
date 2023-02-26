import { ReactNode } from 'react';
import { LinkPropsWithoutRef as props } from 'react-html-props';

export interface LinkProps extends props {
	children: ReactNode;
}