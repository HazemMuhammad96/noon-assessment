import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostsRepository } from "@features/post";
import { createServerSideStateGetter, useAppSelector } from "@lib/state";
import { HYDRATE } from "next-redux-wrapper";

interface HomeState {
    loading: boolean;
    posts: Post[];
    errors: any;
}

const initialState: HomeState = {
    loading: true,
    posts: [],
    errors: null,
};

const fetchSavedPosts = createAsyncThunk(
    "favorites/fetch",
    async (args: any = {}) => {
        return await PostsRepository.getSaved(args.config);
    }
);

export const favoritesSlice = createSlice({
    name: "favoritesSlice",
    initialState,
    reducers: {
        removeSaved: (state, action) => {
            const { postId } = action.payload;
            state.posts = state.posts.filter((post) => post.id !== postId);
            PostsRepository.updateSave(postId, false);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSavedPosts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchSavedPosts.fulfilled, (state, action: any) => {
            state.loading = false;
            state.posts = action.payload;
        });
        builder.addCase(HYDRATE, (_, action: AnyAction) => {
            if (action.payload.favorites.posts.length > 0)
                return action.payload.favorites;
        });
    },
});

export const useFavoritesState = () =>
    useAppSelector((state) => state.favorites);
export const favoritesActions = {
    ...favoritesSlice.actions,
    fetchSavedPosts,
    getServerSideState: createServerSideStateGetter(async (store, config) => {
        await store.dispatch(fetchSavedPosts({ config }));
    }),
};

export default favoritesSlice.reducer;
