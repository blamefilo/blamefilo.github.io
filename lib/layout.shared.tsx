import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import { StoreIcon, UsersRoundIcon } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            // JSX supported
            title: appName,
        },
        githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
        links: [
            {
                icon: <StoreIcon />,
                text: "Store",
                url: `https://filo-studios.tebex.io/`,
            },
            {
                icon: <UsersRoundIcon />,
                text: "Discord",
                url: `https://discord.gg/aTAU7hBdaa`,
            },
        ],
    };
}
