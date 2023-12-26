import mockPosts from "@/mocks/posts";
import { PostCard } from "@features/post";

export default function HomePage() {
    const posts = mockPosts;

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
