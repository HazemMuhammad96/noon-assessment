import type { AppProps } from "next/app";
import LayoutWrapper from "@components/layout/wrapper";
import "@styles/globals.scss";
import Head from "next/head";
import { wrapper } from "@lib/state/store";
import {Provider} from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    const { store, props } = wrapper.useWrappedStore({ ...pageProps });

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Provider store={store}>
                <LayoutWrapper>
                    <Component {...props} />
                </LayoutWrapper>
            </Provider>
        </>
    );
}
