import type { IconButtonProps } from "./types";
import styles from "./icon-button.module.scss";

export default function IconButton({ children, onClick }: IconButtonProps) {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            {children}
        </button>
    );
}
