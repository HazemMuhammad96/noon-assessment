import Post from "../../models/post";
import User from "../../models/user";

interface PostCardProps {
    post: Post;
    onSaveClicked: (postId: number, shouldSave: boolean) => void;
}

interface UserInformationProps {
    user: User;
}

interface SaveButtonProps {
    liked: boolean;
    count: number;
    onClick: () => void;
}
