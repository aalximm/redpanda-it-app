import styles from './Header.module.css';
import Image from 'next/image';
import logo from '../logo_legal.png';
import { HeaderProps } from './Header.props';
import { H, PageLink } from '@/components/LowLevelComponents';
import cn from 'classnames';
import { NavigationCategories } from '@/interfaces/interfaces';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return (
		<div className={cn(className, styles.wrapper)} {...props}>
			<div className={styles.logoWrapper}>
				<Image
					src={logo}
					alt='logo'
					className={styles.logo}
				/>
			</div>
			<div className={styles.titleWrapper}>
				<H tag='h1' className={styles.title}>Panda International Team</H>
				<p className={styles.motto}>from desire to reality</p>
			</div>
			<div className={styles.categories}>
				<PageLink category={NavigationCategories.About}>About</PageLink>
				<PageLink category={NavigationCategories.Services}>Services</PageLink>
				<PageLink category={NavigationCategories.Advices}>Advices</PageLink>
				<PageLink category={NavigationCategories.ContactUs}>Contact Us</PageLink>
			</div>
		</div>
	);
};