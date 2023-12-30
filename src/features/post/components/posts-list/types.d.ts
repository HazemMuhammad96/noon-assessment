import { Post } from "@features/post";

export interface PostsListProps {
    posts: Post[];
    loading: boolean;
    onToggleSave: (postId: number, shouldSave: boolean) => void;
}
