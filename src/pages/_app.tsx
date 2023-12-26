import type { AppProps } from "next/app";
import LayoutWrapper from "@components/layout/wrapper/wrapper";
import "@styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LayoutWrapper>
            <Component {...pageProps} />
        </LayoutWrapper>
    );
}
