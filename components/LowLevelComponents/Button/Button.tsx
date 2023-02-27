import { PProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ className, children, ...props }: PProps) => {
	return (
		<button className={cn(className, styles.button)} {...props}>
			{children}
		</button>
	);
}