import { LayoutProps } from "./layout.props";
import styles from './layout.module.css';
import { H } from "@/components";
import { Header } from "./Header/Header";

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.body}>
				{children}
			</div>
			<div className={styles.footer}>
				<H tag='h3'>This is footer</H>
			</div>
		</div>
	);
}

export default Layout;