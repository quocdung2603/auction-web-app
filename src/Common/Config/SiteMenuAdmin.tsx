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
    submenu: [
      {
        content: "Asset Type",
        icon: <></>,
        href: routerLinkAdmin.AssetType,
      },
      {
        content: "Assets",
        icon: <></>,
        href: routerLinkAdmin.Asset,
      },
      {
        content: "Inventory",
        icon: <></>,
        href: routerLinkAdmin.Inventory,
      },
      {
        content: "Warehouse",
        icon: <></>,
        href: routerLinkAdmin.Warehouse,
      },
    ],
  },
  {
    content: "Activities",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Event",
        icon: <></>,
        href: routerLinkAdmin.Event,
      },
    ],
  },
  {
    content: "Finance",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Bill",
        icon: <></>,
        href: routerLinkAdmin.Bill,
      },
      {
        content: "Tax",
        icon: <></>,
        href: routerLinkAdmin.Tax,
      },
    ],
  },
  {
    content: "Inquire and bid",
    icon: <IconUserManager />,
    submenu: [
      {
        content: "Auction",
        icon: <></>,
        href: routerLinkAdmin.Auction,
      },
    ],
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
