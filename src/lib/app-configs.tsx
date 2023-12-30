import {HomeIcon, SaveIcon} from "@/assets/icons";

const appConfigs = {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_URL,
    navRoutes: {
        "/": {
            label: "Home",
            icon: <HomeIcon />,
        },
        "/favorites": {
            label: "Favorites",
            icon: <SaveIcon />,
        },
    }
}

export default appConfigs;