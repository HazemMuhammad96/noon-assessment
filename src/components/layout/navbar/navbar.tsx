import NavItem from "./nav-item";
import { HomeIcon, SaveIcon } from "@/assets/icons";
import styles from "./navbar.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
    const routes: {
        [key: string]: {
            label: string;
            icon: React.ReactNode;
        };
    } = {
        "/": {
            label: "Home",
            icon: <HomeIcon />,
        },
        "/favorites": {
            label: "Favorites",
            icon: <SaveIcon />,
        },
    };
    const { pathname } = useRouter();
    const [startOffset, setStartOffset] = useState(6);
    const [scalingPosition, setScalingPosition] = useState<string | undefined>(
        undefined
    );
    const [displayedPathname, setDisplayedPathname] = useState(
        routes[pathname].label
    );

    const routesLength = Object.keys(routes).length;

    const calculateStartOffset = (element: HTMLElement) => {
        const parentOffset =
            element.offsetParent?.getBoundingClientRect().left ?? 0;
        const childOffsetToScreen = element.getBoundingClientRect().left;
        const childOffsetToParent =
            Math.floor(childOffsetToScreen - parentOffset) - 1.5;
        return childOffsetToParent;
    };
    const onNavigating = (e: any, i: number) => {
        console.log(e.target);
        const navigatingTo = e.target.pathname;
        if (pathname === navigatingTo) {
            return;
        }
        const startOffset = calculateStartOffset(e.target);
        const scalingPosition = i >= routesLength / 2 ? "left" : "right";
        setScalingPosition(scalingPosition);
        setTimeout(() => {
            setStartOffset(startOffset);
        }, 150);
        setTimeout(() => {
            setDisplayedPathname(routes[e.target.pathname].label);
            setScalingPosition(undefined);
        }, 300);
    };

    const onMountOffset = () => {
        if (pathname === Object.keys(routes)[0]) {
            return;
        }
        const navItem = document.querySelector(
            `a[href="${pathname}"]`
        ) as HTMLElement;
        if (navItem) {
            const startOffset = calculateStartOffset(navItem);
            setStartOffset(startOffset);
        }
    };

    useEffect(() => {
        onMountOffset();
    }, []);
    return (
        <nav className={styles.nav}>
            <ul>
                <div
                    className={styles.navIndicator}
                    style={{
                        left: `${startOffset}px`,
                        transform: scalingPosition
                            ? "scaleX(1.2)"
                            : "scaleX(1)",
                        transformOrigin: scalingPosition,
                    }}
                >
                    <span>
                        <svg></svg>
                    </span>
                    <div>{displayedPathname}</div>
                </div>
                {Object.entries(routes).map(([path, route], index) => (
                    <li key={path}>
                        <NavItem
                            path={path}
                            label={route.label}
                            icon={route.icon}
                            selected={pathname === path}
                            onClick={(e) => onNavigating(e, index)}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
