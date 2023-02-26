import styles from './Header.module.css';
import Image from 'next/image';
import logo from '../logo.png';
import { HeaderProps } from './Header.props';
import { H } from '@/components';
import cn from 'classnames';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={cn(className, styles.wrapper)}>
			<div className={styles.logoWrapper}>
				<Image
					src={logo}
					alt='logo'
					className={styles.logo}
				/>
			</div>
			<H tag='h1' className={styles.title}>Panda International Team</H>
			<div className={styles.categories}>
				<H tag='h2'>About</H>
				<H tag='h2'>Services</H>
				<H tag='h2'>Clients</H>
				<H tag='h2'>Contact Us</H>
			</div>
		</div>
	);
};