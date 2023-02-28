import { NavigationCategories } from '@/interfaces/interfaces';
import { ReactNode } from 'react';
import { DivProps } from 'react-html-props';

export interface CardProps extends DivProps {
	category?: NavigationCategories;
	children: ReactNode;
}