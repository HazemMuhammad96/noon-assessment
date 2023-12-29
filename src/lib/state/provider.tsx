import { wrapper } from "./store";
import { Provider } from "react-redux";

export default function StoreProvider({
    children,
    ...rest
}: {
    children: any;
    [key: string]: any;
}) {
    const { store, props } = wrapper.useWrappedStore(rest);
    return <Provider store={store}>{children}</Provider>;
}
