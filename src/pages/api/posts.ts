import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@features/post";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Post>>
) {
    // @ts-ignore
    res.status(200).json(mockPosts);
}
