export interface NavItemProps {
    path: string;
    label: string;
    icon: React.ReactNode;
    selected: boolean;
    onClick?: (e: any) => void;
}

export type Routes ={
    [key: string]: {
        label: string;
        icon: React.ReactNode;
    };
}