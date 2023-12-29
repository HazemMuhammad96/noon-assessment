import { PostCard } from "@features/post";
import { PostsListProps } from "./types";

export default function PostsList(props: PostsListProps) {
    return (
        <main>
            <ul
                style={{
                    marginInline: "auto",
                    maxWidth: "650px",
                }}
            >
                {props.posts.map((post, i) => (
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
