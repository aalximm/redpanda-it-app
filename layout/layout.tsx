import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import { H } from "@/components/LowLevelComponents";
import { Header } from "./Header/Header";
import { ForwardedRef, FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "@/context/app.context";

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

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider focusedCategory={props.focusedCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};