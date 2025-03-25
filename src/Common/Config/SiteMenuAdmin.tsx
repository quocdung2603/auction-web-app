import { routerLinkAdmin } from "../../Util/RouterLink";
import { IconDashboard, IconUserManager } from "../Icon/IconSlideBarAdmin";

interface MenuItem {
  content: string;
  icon?: React.ReactNode;
  href?: string;
  submenu?: MenuItem[] | null;
}

export const SiteMenuAdmin: MenuItem[] = [
  {
    content: "Dashboard",
    icon: <IconDashboard />,
    href: routerLinkAdmin.Home,
    submenu: null,
  },
  {
    content: "Account",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "User",
        icon: <></>,
        href: routerLinkAdmin.User,
      },
      {
        content: "Role",
        icon: <></>,
        href: routerLinkAdmin.Role,
      },
    ],
  },
  {
    content: "Assets",
    icon: <IconUserManager />,
    href: routerLinkAdmin.Asset,
    submenu: null,
  },
  {
    content: "Finance",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Bill Register",
        icon: <></>,
        href: routerLinkAdmin.Bill,
      },
      {
        content: "Bill Auction",
        icon: <></>,
        href: routerLinkAdmin.Tax,
      },
    ],
  },
  {
    content: "Auction",
    icon: <IconUserManager />,
    href: routerLinkAdmin.AuctionSession,
    submenu: null,
  },
  {
    content: "Inspector and Request",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Inspector",
        icon: <></>,
        href: routerLinkAdmin.Inspector,
      },
      {
        content: "Request",
        icon: <></>,
        href: routerLinkAdmin.Request,
      },
    ],
  },
];
