import styles from "./loading-indicator.module.scss";

export default function LoadingIndicator() {
    return (
        <div className={styles.loading}>
            <div></div>
        </div>
    );
}
