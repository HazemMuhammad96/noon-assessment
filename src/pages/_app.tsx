import type { AppProps } from "next/app";
import LayoutWrapper from "@components/layout/wrapper/wrapper";
import "@styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <LayoutWrapper>
                <Component {...pageProps} />
            </LayoutWrapper>
        </>
    );
}
