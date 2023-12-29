import { getCookie, setCookie } from "cookies-next";
import { Post } from "@features/post";

export default class PostsRepository {
    private static getSavedPostsIds(configs?: any): Number[] {
        return JSON.parse(getCookie("SAVED_POSTS", configs) ?? "[]");
    }

    static async getAll(configs?: any): Promise<Array<Post>> {
        const url = new URL("http://localhost:3000/api/posts");
        url.searchParams.append("page", configs["page"] ?? "1");
        url.searchParams.append("include", configs["include"] ?? "");
        const response = await fetch(url.href);
        const jsonResponse = await response.json();
        const savedPostsIds = this.getSavedPostsIds(configs);
        const posts = jsonResponse.data.map((post: Post) => ({
            ...post,
            isLiked: savedPostsIds.includes(post.id),
        }));
        console.log({
            posts,
        });

        return {
            ...jsonResponse,
            data: posts,
        };
    }

    static async getSaved(configs?: any): Promise<Array<Post>> {
        return this.getAll({
            ...configs,
            include: this.getSavedPostsIds(configs).join(","),
        });
    }

    private static save(postId: number, configs?: object) {
        const savedPostsIds = this.getSavedPostsIds(configs);
        const stringifiedSavedPostsIds = JSON.stringify([
            ...savedPostsIds,
            postId,
        ]);
        setCookie("SAVED_POSTS", stringifiedSavedPostsIds, configs);
    }

    private static unsave(postId: number, configs?: object) {
        const savedPostsIds= this.getSavedPostsIds(configs);
        const stringifiedSavedPostsIds = JSON.stringify(
            savedPostsIds.filter((id: any) => id !== postId)
        );
        setCookie("SAVED_POSTS", stringifiedSavedPostsIds, configs);
    }

    static updateSave(postId: number, shouldSave: boolean, configs?: object) {
        if (shouldSave) {
            this.save(postId, configs);
        } else {
            this.unsave(postId, configs);
        }
    }
}
