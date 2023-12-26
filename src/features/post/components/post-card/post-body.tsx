import { useMemo } from "react";
import Link from "next/link";

export default function PostBody({ body }: { body: string }) {
    const formattedBody = useMemo(() => {
        const bodyParts = body.split(/[ \n]/);
        return bodyParts.reduce<Array<React.ReactNode>>(
            (cumulativeParts, part, index) => {
                const prevPart = cumulativeParts.at(-1);
                if (part.startsWith("#")) {
                    cumulativeParts.push(
                        <Link
                            className="text-secondary"
                            key={index}
                            href={`/search?query=${encodeURIComponent(
                                part.slice(1)
                            )}`}
                        >
                            {part}{" "}
                        </Link>
                    );
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

    return <p className="mt-3">{formattedBody}</p>;
}
