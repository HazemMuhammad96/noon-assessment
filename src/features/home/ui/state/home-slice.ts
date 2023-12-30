import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, PostsRepository } from "@features/post";
import { createServerSideStateGetter, useAppSelector } from "@lib/state";
import { HYDRATE } from "next-redux-wrapper";

interface HomeState {
    loading: boolean;
    posts: Post[];
}

const initialState: HomeState = {
    loading: true,
    posts: [],
};

const fetchPosts = createAsyncThunk("posts/fetch", async (args: any) => {
    return await PostsRepository.getAll({}, args?.config);
});

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
            state.posts = action.payload;
        });
        builder.addCase(HYDRATE, (_, action: AnyAction) => {
            if (action.payload.home.posts.length > 0)
                return action.payload.home;
        });
    },
});

export const useHomeState = () => useAppSelector((state) => state.home);

export const homeActions = {
    ...homeSlice.actions,
    fetchPosts,
    getServerSideState: createServerSideStateGetter(async (store, config) => {
        await store.dispatch(fetchPosts({ config }));
    }),
};

export default homeSlice.reducer;
