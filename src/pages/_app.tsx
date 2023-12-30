import type { AppProps } from "next/app";
import LayoutWrapper from "@components/layout/wrapper";
import "@styles/globals.scss";
import Head from "next/head";
import StoreProvider from "@lib/state/provider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <StoreProvider pageProps={pageProps}>
                <LayoutWrapper>
                    <Component {...pageProps} />
                </LayoutWrapper>
            </StoreProvider>
        </>
    );
}
