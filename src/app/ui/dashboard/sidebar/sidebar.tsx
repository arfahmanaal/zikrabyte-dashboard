'use client';

import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdOutlineDesignServices,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
  { title: "Users", path: "/dashboard/users", icon: <MdSupervisedUserCircle /> },
  { title: "Products", path: "/dashboard/products", icon: <MdShoppingBag /> },
  { title: "Services", path: "/dashboard/Services", icon: <MdOutlineDesignServices /> },
  { title: "Projects", path: "/dashboard/projects", icon: <MdWork /> },
 
  { title: "Teams", path: "/dashboard/teams", icon: <MdPeople /> },
  { title: "Settings", path: "/dashboard/settings", icon: <MdOutlineSettings /> },
  { title: "Help", path: "/dashboard/help", icon: <MdHelpCenter /> },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src="/zikra_logo12.png"
          alt="ZikraByte Logo"
          width={200}
          height={60}
          className={styles.logo}
        />
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <MenuLink item={item} />
          </li>
        ))}
      </ul>
   {/*   <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>*/ }
    </div>
  );
};

export default Sidebar;
