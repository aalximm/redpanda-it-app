import { NavigationCategories } from '@/interfaces/interfaces';
import { DivProps } from 'react-html-props';

export interface ContactUsComponentProps extends DivProps {
	category?: NavigationCategories;
}