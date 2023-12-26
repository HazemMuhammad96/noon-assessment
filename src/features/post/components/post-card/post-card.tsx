import styles from "./post-card.module.scss";
import type { PostCardProps } from "./types";
import LikeButton from "./like-button";

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className={styles.postCard}>
            <div>
                <img
                    src={post.user.profilePicture}
                    alt={`${post.user.name}'s profile picture`}
                />
                <p>{post.user.name}</p>
            </div>
            <div>
                <img src={post.image} alt={post.imageAlt} />
                <p>{post.title}</p>
                <p>{post.formattedPrice}</p>
                <LikeButton liked={post.isLiked} onClick={() => {}} />
            </div>
            <div>{post.likeCount}</div>
            <p>{post.body}</p>
            <p>
                View {post.commentCount}{" "}
                {post.commentCount === 1 ? "comment" : "comments"}
            </p>
        </div>
    );
}
