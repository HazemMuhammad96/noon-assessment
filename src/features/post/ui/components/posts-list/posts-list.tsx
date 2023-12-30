import { PostCard } from "@features/post";
import { PostsListProps } from "./types";
import styles from "./posts-list.module.scss";
import LoadingIndicator from "@components/loading-indicator";

export default function PostsList(props: PostsListProps) {
    return (
        <main>
            {props.loading && <LoadingIndicator />}
            <ul className={styles.list}>
                {props.posts.map((post) => (
                    <li key={post.id}>
                        <PostCard
                            post={post}
                            onSaveClicked={props.onToggleSave}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}
