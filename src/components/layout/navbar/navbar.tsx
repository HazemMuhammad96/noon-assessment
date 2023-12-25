import NavItem from "./nav-item";

export default function Navbar() {
    const routes: NavItemProps[] = [
        {
            path: "/",
            icon: "🏠",
            label: "Home",
        },
        {
            path: "/about",
            icon: "👩‍💻",
            label: "About",
        },
        {
            path: "/contact",
            icon: "📞",
            label: "Contact",
        },
    ];
    return (
        <nav>
            <ul>
                {routes.map((route) => (
                    <li key={route.path}>
                        <NavItem
                            path={route.path}
                            icon={route.icon}
                            label={route.label}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
