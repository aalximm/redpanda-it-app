import { PageLinkProps } from './PageLink.props';
import styles from './PageLink.module.css';
import cn from 'classnames';
import { H } from '..';
import { AppContext } from '@/context/app.context';
import { useContext } from 'react';

export const PageLink = ({ category, className, children, ...props }: PageLinkProps) => {
	const { focusedCategory, setFocusedCategory } = useContext(AppContext);

	return (
		<a href='#' className={cn(className, styles.link, {
			[styles.focused]: category == focusedCategory
		})}
			onClick={(e) => {
				e.preventDefault();
				setFocusedCategory && setFocusedCategory(category);
			}}
		>
			<H tag='h3' className={styles.text}>{children}</H>
		</a>
	);
}