import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "@features/home";
import { FavoritesSlice } from "@features/favorites";

const makeStore = () =>
    configureStore({
        reducer: {
            home: HomeSlice.reducer,
            favorites: FavoritesSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
