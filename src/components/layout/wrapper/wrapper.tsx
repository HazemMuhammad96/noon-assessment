import Navbar from "@components/layout/navbar/navbar";
import { Poppins } from "next/font/google";
import styles from "./layout-wrapper.module.scss";
import classNames from "classnames";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={classNames(poppins.className, styles.layoutWrapper)}>
            <div className={styles.navContainer}>
                <header>Noon Posts</header>
                <Navbar />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
