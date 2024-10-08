'use client';

import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const MenuLink = ({ item }: { item: MenuItem }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
      {item.icon}
      <p className={styles.title}>{item.title}</p>
    </Link>
  );
};

export default MenuLink;
