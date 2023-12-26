import styles from "./post-card.module.scss";
import type { PostCardProps } from "./types";
import SaveButton from "./save-button";
import UserInformation from "@features/post/components/post-card/user-information";
import PostBody from "@features/post/components/post-card/post-body";

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className={styles.postCard}>
            <UserInformation user={post.user} />
            <div className={styles.imageSection}>
                <img src={post.image} alt={post.imageAlt} />
                <div className={styles.imageInformationShadow} />
                <p>{post.title}</p>
                <strong>{post.formattedPrice}</strong>
                <SaveButton
                    liked={post.isLiked}
                    count={post.likeCount}
                    onClick={() => {}}
                />
            </div>
            <PostBody body={post.body} />
            <button className="pt-3 mb-5 text-primary">
                View {post.commentCount}{" "}
                {post.commentCount === 1 ? "comment" : "comments"}
            </button>
        </div>
    );
}
