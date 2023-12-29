import { Post } from "@features/post";

export interface PostsListProps {
    posts: Post[];
    loading: boolean;
    count: number;
    page: number;
    onToggleSave: (postId: number, shouldSave: boolean) => void;
    onFetch: () => void;
}
