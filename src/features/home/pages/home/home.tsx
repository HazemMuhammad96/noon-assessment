import mockPosts from "@/mocks/posts";
import { PostCard } from "@features/post";

export default function HomePage() {
    const posts = mockPosts;

    return (
        <main>
            <ul>
                {posts.map((post) => (
                    <li>
                        <PostCard post={post} onLikeClicked={() => {}} />
                    </li>
                ))}
            </ul>
        </main>
    );
}
