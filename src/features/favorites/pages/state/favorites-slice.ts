import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostsRepository } from "@features/post";
import { useAppSelector } from "@lib/state";
import { HYDRATE } from "next-redux-wrapper";
// @ts-ignore
import type { GetThunkAPI } from "@reduxjs/toolkit/src/createAsyncThunk";

interface HomeState {
    loading: boolean;
    posts: Post[];
    count: number;
    errors: any;
    page: number;
}

const initialState: HomeState = {
    loading: false,
    posts: [],
    count: 0,
    errors: null,
    page: 0,
};

const fetchSavedPosts = createAsyncThunk(
    "favorites/fetch",
    async (args: any, getThunkApi: GetThunkAPI) => {
        return await PostsRepository.getSaved({
            ...args?.config,
            page: getThunkApi.getState().home.page + 1,
        });
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
            if (state.page !== action.payload["page"])
                state.posts.push(...action.payload["data"]);
            state.count = action.payload["count"];
            state.page = action.payload["page"];
        });
        builder.addCase(fetchSavedPosts.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.error;
        });
        builder.addCase(HYDRATE, (state, action) => {
            console.log({
                hydrationPayload: action.payload,
            });
            // state === action.payload.favorites;
        });
        // [fetchPosts.rejected]: (state, error) => {},
        // [HYDRATE]: (state, action) => {
        //     return {
        //         ...state,
        //         ...action.payload.chapters,
        //         items: action.payload.chapters.items.map((it) =>
        //             Chapter.fromDTO(it)
        //         ),
        //     };
        // },
    },
});

export const useFavoritesState = () =>
    useAppSelector((state) => state.favorites);
export const favoritesActions = { ...favoritesSlice.actions, fetchSavedPosts };

export default favoritesSlice.reducer;
