/* eslint-disable react/display-name */
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useContext, useEffect, useRef } from 'react';
import { AppContext } from '@/context/app.context';

export const Card = forwardRef(({ category, children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const { focusedCategory } = useContext(AppContext);

	const categoryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (category == focusedCategory) {
			console.log('im ', category);
			categoryRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
		}
	}, [category, focusedCategory]);
	
	return (
		<div className={cn(styles.card, className)} ref={categoryRef} {...props}>
			{children}
		</div>
	);
}); 