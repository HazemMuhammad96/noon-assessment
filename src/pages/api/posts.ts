import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@features/post";
import mockPosts from "@/mocks/posts";

interface PostResponse {
    page: number;
    limit: number;
    count: number;
    data: Post[];
}

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
            mockPosts,
            Number(req.query.page ?? 1),
            Number(req.query.limit ?? 10)
        )
    );
}
