import { getCookie, setCookie } from "cookies-next";
import { Post } from "@features/post";
import { Params } from "@lib/types/repository";
import appConfigs from "@configs";

export default class PostsRepository {
    private static COOKIE_NAME = "SAVED_POSTS";

    protected static getSavedPostsIds(configs?: Params): Number[] {
        return JSON.parse(getCookie(this.COOKIE_NAME, configs) ?? "[]");
    }

    private static combinePostsWithSaved(allPosts: Post[], configs?: Params) {
        const savedPostsIds = this.getSavedPostsIds(configs);
        return allPosts.map((post: Post) => ({
            ...post,
            isLiked: savedPostsIds.includes(post.id),
        }));
    }

    static async getAll(
        params: Params,
        configs?: Params
    ): Promise<Array<Post>> {
        const url = new URL(`${appConfigs.apiBaseUrl}/posts`);
        if (params) {
            url.searchParams.append("include", params["include"] ?? "");
        }
        const response = await fetch(url.href);
        const jsonResponse = await response.json();
        return this.combinePostsWithSaved(jsonResponse, configs);
    }

    private static save(postId: number, configs?: Params) {
        const savedPostsIds = this.getSavedPostsIds(configs);
        const stringifiedSavedPostsIds = JSON.stringify([
            ...savedPostsIds,
            postId,
        ]);
        setCookie(this.COOKIE_NAME, stringifiedSavedPostsIds, configs);
    }

    static unSave(postId: number, configs?: Params) {
        const savedPostsIds = this.getSavedPostsIds(configs);
        const stringifiedSavedPostsIds = JSON.stringify(
            savedPostsIds.filter((id: any) => id !== postId)
        );
        setCookie(this.COOKIE_NAME, stringifiedSavedPostsIds, configs);
    }

    static updateSave(postId: number, shouldSave: boolean, configs?: Params) {
        if (shouldSave) {
            this.save(postId, configs);
        } else {
            this.unSave(postId, configs);
        }
    }
}
