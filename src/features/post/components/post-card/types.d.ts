import Post from "../../models/post";

interface PostCardProps {
    post: Post;
    onLikeClicked: (post: Post, isLiked: boolean) => void;
}

interface LikeButtonProps {
    liked: boolean;
    onClick: () => void;
}