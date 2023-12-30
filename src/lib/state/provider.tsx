import { wrapper } from "./store";
import { Provider } from "react-redux";

export default function StoreProvider({
    children,
    pageProps,
}: {
    pageProps: { [_: string]: any };
    children: React.ReactNode;
}) {
    const { store } = wrapper.useWrappedStore({ ...pageProps });
    return <Provider store={store}>{children}</Provider>;
}
