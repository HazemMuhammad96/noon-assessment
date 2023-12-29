import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "@features/home/state/home-slice";
import { favoritesSlice } from "@features/favorites/pages/state/favorites-slice";

const makeStore = () =>
    configureStore({
        reducer: {
            home: homeSlice.reducer,
            favorites: favoritesSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore, {
    debug: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
