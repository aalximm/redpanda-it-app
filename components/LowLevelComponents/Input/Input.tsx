/* eslint-disable react/display-name */
import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useState } from 'react';
import { H } from '..';

export const Input = forwardRef(({ isFilled=false, className, error, placeholder, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

	return (
		<div className={cn(styles.inputWrapper, className)}>
			<input type='text' className={cn(styles.input, {
				[styles.error]: error,
				[styles.filled]: isFilled
			})}
				ref={ref} {...props}
			/>
			<p className={styles.placeholder}>{placeholder}</p>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
}); 