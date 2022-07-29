import { MenuItemFragment } from '@/libs/menus';
import React from 'react';

import DropdownMenu from './dropdown-menu';
import menuItems from './main-menu.json';

const menu = menuItems as MenuItemFragment[];

export function Menu() {
  return (
    <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
      <ul className="flex space-x-8">
        {menu.map(item => (
          <li key={item?.id}>
            <DropdownMenu key={item?.id} menuItem={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
