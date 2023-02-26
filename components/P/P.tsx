import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ className, children, ...props }: PProps) => {
	return (
		<p className={cn(className, styles.p)} {...props}>
			{children}
		</p>
	);
}