import { routerLinkAdmin } from "../../Util/RouterLink";
import { IconDashboard, IconUserManager } from "../Icon/IconSlideBarAdmin";

export const SiteMenuAdmin = [
  {
    content: 'Dashboard',
    icon: <IconDashboard />,
    href: routerLinkAdmin.Home,
  },
  {
    content: 'User',
    icon: <IconUserManager />,
    href: routerLinkAdmin.User,
  },
];