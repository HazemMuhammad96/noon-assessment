import type {
    EnhancedStore,
    StoreEnhancer,
    ThunkDispatch,
    Tuple,
    UnknownAction,
} from "@reduxjs/toolkit";
import type { AppStore } from "./store";

export type Store = EnhancedStore<
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
