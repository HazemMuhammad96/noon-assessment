import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@features/post";
import mockPosts from "@/mocks/posts";

const getFilteredPosts = (posts: Post[], includePosts: string) => {
    if (!includePosts) return posts;
    const includedPosts: number[] = includePosts
        .split(",")
        .map((id) => Number(id));
    return posts.filter((post) => includedPosts.includes(post.id));
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    res.status(200).json(
        getFilteredPosts(mockPosts, req.query.include as string)
    );
}
