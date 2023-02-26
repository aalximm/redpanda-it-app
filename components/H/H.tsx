import { HProps } from './H.props';
import styles from './H.module.css';
import cn from 'classnames';

export const H = ({ tag='h1', className, children, ...props }: HProps) => {
	switch (tag) {
		case 'h1': return <h1 className={cn(styles.h1, className)} {...props}>{children}</h1>;
		case 'h2': return <h2 className={cn(styles.h2, className)} {...props}>{children}</h2>;
		case 'h3': return <h3 className={cn(styles.h3, className)} {...props}>{children}</h3>;
	}
}