import useFormattedBody from "../../hooks/use-formatted-body";

export default function PostBody({ body }: { body: string }) {
    const formattedBody = useFormattedBody(body);

    return <p className="mt-3">{formattedBody}</p>;
}
