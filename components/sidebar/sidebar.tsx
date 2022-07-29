import clsx from 'clsx';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

import { MenuItemFragment } from '@/libs/menus';
import menu from './sidebar-menu.json';
import SidebarStickySection from './sidebar-sticky-section';

const menuItems = menu as MenuItemFragment[];

export type SidebarProps = HTMLAttributes<HTMLElement>;

export function Sidebar({ className, ...rest }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'hidden lg:block z-20 inset-0 top-[3.8125rem] overflow-y-auto',
        'left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8',
        className
      )}
      {...rest}
    >
      <nav className="lg:text-sm lg:leading-6 relative">
        <SidebarStickySection />

        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <div className="sm:ml-14">
                {item?.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={clsx(
                      'group flex items-center lg:text-sm lg:leading-6 mb-4',
                      'font-semibold text-sky-500 dark:text-sky-400'
                    )}
                  >
                    {item?.name}
                  </a>
                ) : (
                  <Link href={item.path!}>
                    <a
                      href="pass"
                      className={clsx(
                        'group flex items-center lg:text-sm lg:leading-6 mb-4',
                        'font-semibold text-sky-500 dark:text-sky-400'
                      )}
                    >
                      {item?.name}
                    </a>
                  </Link>
                )}

                {!!item?.children && (
                  <ul className="list-none mb-8">
                    {item.children.map(sub => (
                      <li key={sub?.id}>
                        {sub?.url ? (
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-base cursor-pointer hover:underline"
                            data-testid={`sidebarExternalLinks${sub?.name}`}
                          >
                            {sub?.name}
                          </a>
                        ) : (
                          <Link href={sub.path!} passHref>
                            <a
                              href="pass"
                              className="text-base cursor-pointer hover:underline"
                              data-testid={`sidebarInternalLinks${sub?.name}`}
                            >
                              {sub?.name}
                            </a>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
