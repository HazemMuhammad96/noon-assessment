import { AppStore, wrapper } from "./store";
import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type {
    EnhancedStore,
    StoreEnhancer,
    ThunkDispatch,
    UnknownAction,
} from "@reduxjs/toolkit";
import { Tuple } from "@reduxjs/toolkit";

type Store = EnhancedStore<
    AppStore,
    UnknownAction,
    Tuple<
        [
            StoreEnhancer<{
                dispatch: ThunkDispatch<AppStore, undefined, UnknownAction>;
            }>,
            StoreEnhancer,
        ]
    >
>;
export const createServerSideStateGetter =
    (
        callback: (
            store: Store,
            props: GetServerSidePropsContext
        ) => Promise<any>
    ) =>
    () =>
        wrapper.getServerSideProps(
            (store) =>
                async (config): Promise<GetServerSidePropsResult<any>> => {
                    //@ts-ignore
                    const props = await callback(store, config);
                    return {
                        props,
                    };
                }
        );
