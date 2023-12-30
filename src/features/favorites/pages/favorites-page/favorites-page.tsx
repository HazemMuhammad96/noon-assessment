import { Post, PostsList } from "@features/post";
import { useAppDispatch } from "@lib/state";
import {
    favoritesActions,
    useFavoritesState,
} from "@features/favorites/pages/state/favorites-slice";

export default function FavoritesPage({ posts }: { posts: Post[] }) {
    const favoritesState = useFavoritesState();
    const dispatch = useAppDispatch();

    console.log({
        favoritesState,
    });
    return (
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
    );
}
