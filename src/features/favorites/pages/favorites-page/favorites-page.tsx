import { Post, PostsList } from "@features/post";
import { useAppDispatch } from "@lib/state";
import {
    favoritesActions,
    useFavoritesState,
} from "@features/favorites/pages/state/favorites-slice";
import EmptySavedMessage from "@features/favorites/components/empty-saved-message";

export default function FavoritesPage({ posts }: { posts: Post[] }) {
    const favoritesState = useFavoritesState();
    const dispatch = useAppDispatch();
    return (
        <>
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
