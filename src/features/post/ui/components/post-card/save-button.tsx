import type { SaveButtonProps } from "./types";
import { SaveAddIcon, SaveRemoveIcon } from "@/assets/icons";
import classNames from "classnames";
import IconButton from "@components/icon-button";

export default function SaveButton({ liked, count, onClick }: SaveButtonProps) {
    const actualCount = count + Number(liked);
    return (
        <div className="row" aria-label="likes">
            <span
                className={classNames({
                    "text-primary-container": liked,
                })}
                title={`${count} likes`}
            >
                {Intl.NumberFormat("en-US", {
                    notation: "compact",
                }).format(actualCount)}
            </span>
            <IconButton onClick={onClick}>
                {liked ? (
                    <SaveRemoveIcon
                        variant="Bold"
                        color="var(--color-primary-container)"
                    />
                ) : (
                    <SaveAddIcon />
                )}
            </IconButton>
        </div>
    );
}
