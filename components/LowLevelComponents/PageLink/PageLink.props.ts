import { NavigationCategories } from '@/interfaces/interfaces';
import { ReactNode } from 'react';
import { LinkPropsWithoutRef as props } from 'react-html-props';

export interface PageLinkProps extends props {
	category: NavigationCategories; 
	children: ReactNode;
}