import { getCookie, setCookie } from "cookies-next";
import { Post } from "@features/post";
import { Params } from "@lib/types/repository";

export default class PostsRepository {
    private static getSavedPostsIds(configs?: Params): Number[] {
        return JSON.parse(getCookie("SAVED_POSTS", configs) ?? "[]");
    }

    static async getAll(
        params: Params,
        configs?: Params
    ): Promise<Array<Post>> {
        const url = new URL("http://localhost:3000/api/posts");
        url.searchParams.append("include", params["include"] ?? "");
        const response = await fetch(url.href);
        const jsonResponse = await response.json();
        const savedPostsIds = this.getSavedPostsIds(configs);
        const posts = jsonResponse.map((post: Post) => ({
            ...post,
            isLiked: savedPostsIds.includes(post.id),
        }));
        return posts;
    }

    static async getSaved(configs?: any): Promise<Array<Post>> {
        return this.getAll(
            {
                include: this.getSavedPostsIds(configs).join(",") || ",",
            },
            configs
        );
    }

    private static save(postId: number, configs?: Params) {
        const savedPostsIds = this.getSavedPostsIds(configs);
        const stringifiedSavedPostsIds = JSON.stringify([
            ...savedPostsIds,
            postId,
        ]);
        setCookie("SAVED_POSTS", stringifiedSavedPostsIds, configs);
    }

    private static unSave(postId: number, configs?: Params) {
        const savedPostsIds = this.getSavedPostsIds(configs);
        const stringifiedSavedPostsIds = JSON.stringify(
            savedPostsIds.filter((id: any) => id !== postId)
        );
        setCookie("SAVED_POSTS", stringifiedSavedPostsIds, configs);
    }

    static updateSave(postId: number, shouldSave: boolean, configs?: Params) {
        if (shouldSave) {
            this.save(postId, configs);
        } else {
            this.unSave(postId, configs);
        }
    }
}
