import { PostsList } from "@features/post";
import { homeActions, useHomeState } from "@features/home/state/home-slice";
import { useAppDispatch } from "@lib/state";

export default function HomePage() {
    const homeState = useHomeState();
    const dispatch = useAppDispatch();

    console.log({
        homeState,
    });
    return (
        <PostsList
            posts={homeState.posts}
            loading={homeState.loading}
            onToggleSave={(postId, shouldSave) =>
                dispatch(
                    homeActions.toggleSave({
                        postId,
                        shouldSave,
                    })
                )
            }
        />
    );
}
