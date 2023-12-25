import Link from "next/link";

export default function NavItem(props: NavItemProps) {
    return (
        <Link href={props.path}>
            <span>{props.icon}</span>
            <span>{props.label}</span>
        </Link>
    );
}
