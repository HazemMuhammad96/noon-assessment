import { PostsList } from "@features/post";
import { useAppDispatch } from "@lib/state";
import {
    favoritesActions,
    useFavoritesState,
} from "../../state/favorites-slice";
import EmptySavedMessage from "../../components/empty-saved-message";
import Head from "next/head";

export default function FavoritesPage() {
    const favoritesState = useFavoritesState();
    const dispatch = useAppDispatch();
    return (
        <>
            <Head>
                <title>Favorites</title>
            </Head>
            {favoritesState.posts.length === 0 ? (
                <EmptySavedMessage />
            ) : (
                <PostsList
                    posts={favoritesState.posts}
                    loading={favoritesState.loading}
                    onToggleSave={(postId) => {
                        dispatch(
                            favoritesActions.removeSaved({
                                postId,
                                shouldSave: false,
                            })
                        );
                    }}
                />
            )}
        </>
    );
}
