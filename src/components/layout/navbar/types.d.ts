interface NavItemProps {
    path: string;
    label: string;
    icon: React.ReactNode;
    selected: boolean;
    onClick?: (e: any) => void;
}
