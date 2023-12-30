import { Post, PostsRepository } from "@features/post";

export default class SavedPostsRepository extends PostsRepository {
    static async getSaved(configs?: any): Promise<Array<Post>> {
        return this.getAll(
            {
                include: this.getSavedPostsIds(configs).join(",") || ",",
            },
            configs
        );
    }
}