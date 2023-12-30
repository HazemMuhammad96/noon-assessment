import type User from "./user";

export default interface Post {
    id: number;
    user: User;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    commentCount: number;
    description: string;
    isLiked: boolean;
    likes: number;
}