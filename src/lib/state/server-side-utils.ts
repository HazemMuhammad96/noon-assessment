import {AppStore, wrapper} from "./store";
import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type { EnhancedStore } from "@reduxjs/toolkit";

export const createServerSideStateGetter =
    (
        callback: (
            store: EnhancedStore,
            props: GetServerSidePropsContext
        ) => Promise<any>
    ) =>
    () =>
        wrapper.getServerSideProps(
            (store) =>
                async (config): Promise<GetServerSidePropsResult<any>> => {
                    const props = await callback(store, config);
                    return {
                        props,
                    };
                }
        );
