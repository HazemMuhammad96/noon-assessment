import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostsRepository } from "@features/post";
import { useAppSelector } from "@lib/state";
import { HYDRATE } from "next-redux-wrapper";
// @ts-ignore
import type { GetThunkAPI } from "@reduxjs/toolkit/src/createAsyncThunk";

interface HomeState {
    loading: boolean;
    posts: Post[];
    errors: any;
    count: number;
    page: number;
}

const initialState: HomeState = {
    loading: true,
    posts: [],
    count: 0,
    errors: null,
    page: 0,
};

const fetchPosts = createAsyncThunk(
    "posts/fetch",
    async (args: any, getThunkApi: GetThunkAPI) => {
        return await PostsRepository.getAll({
            ...args?.config,
            page: getThunkApi.getState().home.page + 1,
        });
    }
);

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        toggleSave: (state, action) => {
            const { postId, shouldSave } = action.payload;
            const postIndex = state.posts.findIndex(
                (post) => post.id === postId
            );
            state.posts[postIndex].isLiked = shouldSave;
            PostsRepository.updateSave(postId, shouldSave);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action: any) => {
            state.loading = false;
            if (state.page !== action.payload["page"])
                state.posts.push(...action.payload["data"]);
            state.count = action.payload["count"];
            state.page = action.payload["page"];
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.error;
        });
        builder.addCase(HYDRATE, (state, action) => {
            console.log("hydrateeeeeeeeeeeeeeed");
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

export const useHomeState = () => useAppSelector((state) => state.home);
export const homeActions = { ...homeSlice.actions, fetchPosts };

export default homeSlice.reducer;
