/* eslint-disable react/display-name */
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(({ children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div className={cn(styles.card, className)} ref={ref} {...props}>
			{children}
		</div>
	);
}); 