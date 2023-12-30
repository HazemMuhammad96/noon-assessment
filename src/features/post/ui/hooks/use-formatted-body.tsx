import { useMemo } from "react";
import Link from "next/link";

/**
 * @param body - The body of the post
 * @case - tag: return a Link to the search page for that tag
 * @case - string: append the string to the previous string to avoid unnecessary react nodes
 * @case - first string: return the string
 * @returns An array of React nodes that represent the body of the post
 * */
export default function useFormattedBody(body: string) {
    return useMemo(() => {
        const bodyParts = body.split(" ");
        return bodyParts.reduce<Array<React.ReactNode>>(
            (cumulativeParts, part, index) => {
                const prevPart = cumulativeParts.at(-1);
                if (part.startsWith("#")) {
                    cumulativeParts.push(<TagLink tag={part} key={index} />);
                } else if (typeof prevPart !== "string" || index === 0) {
                    cumulativeParts.push(part);
                } else {
                    cumulativeParts[cumulativeParts.length - 1] =
                        `${prevPart} ${part} `;
                }

                return cumulativeParts;
            },
            []
        );
    }, [body]);
}

function TagLink({ tag }: { tag: string }) {
    return (
        <Link
            className="text-secondary"
            href={`/search?query=${encodeURIComponent(tag.slice(1))}`}
        >
            {tag}{" "}
        </Link>
    );
}
