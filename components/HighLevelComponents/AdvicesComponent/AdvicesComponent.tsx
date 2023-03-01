/* eslint-disable react/display-name */
import { AdvicesComponentProps } from './AdvicesComponent.props';
import styles from './AdvicesComponent.module.css';
import cn from 'classnames';
import { Card, H, P } from '@/components/LowLevelComponents';
import { advices } from '@/constants/text.constants';
import { NavigationCategories } from '@/interfaces/interfaces';
import Image from 'next/image';
import icon from './icon.png';

export const AdvicesComponent = ({ category, className, ...props }: AdvicesComponentProps): JSX.Element => {
	return (
		<Card category={NavigationCategories.Advices} className={cn(className, styles.wrapper)} {...props}>
			<div className={styles.titleWrapper}>
				<H tag='h1' className={styles.title}>Usefull Advices </H>
				<Image src={icon} alt="mind" />
			</div>
			<div className={styles.content}>
				{advices.map(advice => (
					<P key={advice} className={styles.advice}>{advice}</P>
				))}
			</div>
		</Card>
	);
}; 