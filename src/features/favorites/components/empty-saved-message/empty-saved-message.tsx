import { SaveEmptyIcon } from "@/assets/icons";
import styles from "./empty-saved-message.module.scss";

export default function EmptySavedMessage() {
    return (
        <main className={styles.emptySavedMessage}>
            <div className={styles.iconContainer}>
                <SaveEmptyIcon  />
            </div>
            <h1>No saved posts</h1>
            <p>Save a post to see it here</p>
        </main>
    );
}
