import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Quicksand } from 'next/font/google';
import Layout from '@/layout/layout';

const quicksand = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Red Panda IT app</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<main className={quicksand.className}>
					<Component {...pageProps} />
				</main>
			</Layout>
		</>
	);

}
