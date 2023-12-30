import Link from "next/link";
import styles from "./navbar.module.scss";
import {NavItemProps} from "./types";

export default function NavItem(props: NavItemProps) {
    return (
        <Link
            aria-selected={props.selected}
            className={styles.navItem}
            href={props.path}
            onClick={props.onClick}
        >
            <span>{props.icon}</span>
            <div>{props.label}</div>
        </Link>
    );
}
