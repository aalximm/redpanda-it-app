import { CardProps } from '@/components/LowLevelComponents/Card/Card.props';
import { NavigationCategories } from '@/interfaces/interfaces';
import { DivProps } from 'react-html-props';

export interface AdvicesComponentProps extends DivProps {
	category?: NavigationCategories;
}