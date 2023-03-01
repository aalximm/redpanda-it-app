/* eslint-disable react/display-name */
import { ServicesComponentProps } from './ServicesComponent.props';
import styles from './ServicesComponent.module.css';
import cn from 'classnames';
import { Card, H, P } from '@/components/LowLevelComponents';
import { services } from '@/constants/text.constants';

export const ServicesComponent = ({ category, className, ...props }: ServicesComponentProps): JSX.Element => {
	return (
		<Card className={cn(className, styles.wrapper)} category={category} {...props}>
			<H tag='h1'>Services</H>
			<div className={styles.content}>
				{services.map(service => (
					<P key={service} className={styles.service}>{service}</P>
				))}
			</div>
		</Card>
	);
}; 