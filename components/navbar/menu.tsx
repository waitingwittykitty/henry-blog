import React from 'react';

import DropdownMenu from './dropdown-menu';
import menuItems from './main-menu.json';

export function Menu() {
  return (
    <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
      <ul className="flex space-x-8">
        {menuItems.map(item => (
          <li key={item?.id}>
            <DropdownMenu key={item?.id} menuItem={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
