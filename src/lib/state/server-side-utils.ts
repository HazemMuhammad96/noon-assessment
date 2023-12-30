import {  wrapper } from "./store";
import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import {Store} from "./types";



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
