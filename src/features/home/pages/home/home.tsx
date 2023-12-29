import { Post, PostCard } from "@features/post";

export default function HomePage({ posts }: { posts: Post[] }) {
    return (
        <main>
            <ul
                style={{
                    marginInline: "auto",
                    maxWidth: "650px",
                }}
            >
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} onLikeClicked={() => {}} />
                    </li>
                ))}
            </ul>
        </main>
    );
}
