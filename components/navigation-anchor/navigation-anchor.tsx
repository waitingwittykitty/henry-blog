import Link from 'next/link';

import { getLinkPath } from '@/libs/menus';

type MenuItem = {
  id: string;
  url?: string;
  name: string;
  children?: MenuItem[];
};

interface NavigationAnchorProps {
  menuItem: MenuItem;
  className: string;
}

export function NavigationAnchor({ menuItem, className }: NavigationAnchorProps) {
  if (menuItem.url) {
    return (
      <a
        href={menuItem.url}
        target="_blank"
        rel="noreferrer"
        className={className}
        data-testid={`categoriesList${menuItem.name}`}
      >
        {menuItem.name}
      </a>
    );
  }

  return (
    <Link href={getLinkPath(menuItem)} passHref>
      <a href="pass" className={className} data-testid={`categoriesList${menuItem.name}`}>
        {menuItem.name}
      </a>
    </Link>
  );
}

export default NavigationAnchor;
