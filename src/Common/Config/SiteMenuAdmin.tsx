import { RouterLinkAdmin } from "../../Util/routerLink";
import { IconDashboard, IconUserManager } from "../Icon/IconSlideBarAdmin";

export const siteMenuAdmin = [
    {
      content: 'Dashboard',
      icon: <IconDashboard/>,
      href: RouterLinkAdmin.Home,
    },
    {
      content: 'User',
      icon: <IconUserManager/>,
      href: RouterLinkAdmin.User,
    },
  ];