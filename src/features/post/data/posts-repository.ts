import { getCookie, setCookie } from "cookies-next";
import { Post } from "@features/post";

export default class PostsRepository {
    static async getAll(configs?: object): Promise<Array<Post>> {
        const res = await fetch("http://localhost:3000/api/posts");
        const allPosts = await res.json();
        const savedPostsIds: string[] = JSON.parse(
            getCookie("SAVED_POSTS", configs) ?? "[]"
        );
        const posts = allPosts.data.map((post: Post) => ({
            ...post,
            isLiked: savedPostsIds.includes(post.id.toString()),
        }));

        return posts;
    }

    static async save(postId: number, configs?: object): Promise<void> {
        const savedPostsIds: string[] = JSON.parse(
            getCookie("SAVED_POSTS", configs) ?? "[]"
        );
        const stringifiedSavedPostsIds = JSON.stringify([
            ...savedPostsIds,
            postId,
        ]);
        setCookie("SAVED_POSTS", stringifiedSavedPostsIds, configs);
    }
}
