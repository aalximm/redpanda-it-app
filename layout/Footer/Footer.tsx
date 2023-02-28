import styles from './Footer.module.css';
import Image from 'next/image';
import logo from '../logo.png';
import { HeaderProps } from './Footer.props';
import { H, PageLink } from '@/components/LowLevelComponents';
import cn from 'classnames';
import { NavigationCategories } from '@/interfaces/interfaces';

export const Footer = ({ className, ...props }: HeaderProps): JSX.Element => {

	return (
		<div className={cn(className, styles.wrapper)} {...props}>
			<H tag='h2'>address</H>
			<H tag='h2'>email</H>
			<H tag='h2'>phone number</H>
		</div>
	);
};