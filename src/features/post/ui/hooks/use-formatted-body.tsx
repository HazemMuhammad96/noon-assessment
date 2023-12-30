import { useMemo } from "react";
import Link from "next/link";

function TagLink({ tag }: { tag: string }) {
    return (
        <Link
            className="text-secondary"
            key={tag}
            href={`/search?query=${encodeURIComponent(tag.slice(1))}`}
        >
            {tag}{" "}
        </Link>
    );
}

export default function useFormattedBody(body: string) {
    return useMemo(() => {
        const bodyParts = body.split(" ");
        return bodyParts.reduce<Array<React.ReactNode>>(
            (cumulativeParts, part, index) => {
                const prevPart = cumulativeParts.at(-1);
                if (part.startsWith("#")) {
                    cumulativeParts.push(<TagLink tag={part} />);
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
