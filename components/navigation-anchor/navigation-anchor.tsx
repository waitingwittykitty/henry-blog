import Link from 'next/link';

import { MenuItemFragment } from '@/libs/menus';

interface NavigationAnchorProps {
  menuItem: MenuItemFragment;
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
    <Link href={menuItem.path ?? '/'} passHref>
      <a href="pass" className={className} data-testid={`categoriesList${menuItem.name}`}>
        {menuItem.name}
      </a>
    </Link>
  );
}

export default NavigationAnchor;
