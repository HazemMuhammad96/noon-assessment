import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@features/post";
import mockPosts from "@/mocks/posts";

interface PostResponse {
    page: number;
    limit: number;
    count: number;
    data: Post[];
}

const getFilteredPosts = (posts: Post[], includePosts: string) => {
    if (!includePosts) return posts;
    const includedPosts: number[] = includePosts
        .split(",")
        .map((id) => Number(id));
    return posts.filter((post) => includedPosts.includes(post.id));
};

const getPaginatedPosts = (
    posts: Post[],
    page: number = 1,
    limit: number = 10
) => {
    return {
        page,
        limit,
        count: posts.length,
        data: posts.slice((page - 1) * limit, page * limit),
    };
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostResponse>
) {
    res.status(200).json(
        getPaginatedPosts(
            getFilteredPosts(mockPosts, req.query.include as string),
            Number(req.query.page ?? 1),
            Number(req.query.limit ?? 10)
        )
    );
}
