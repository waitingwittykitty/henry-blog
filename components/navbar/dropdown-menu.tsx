import Link from 'next/link';

import { getLinkPath } from '@/libs/menus';

import { NavigationAnchor } from '../navigation-anchor/navigation-anchor';

type MenuItem = {
  id: string;
  name: string;
  url: string;
  children?: MenuItem[];
};

interface DropdownProps {
  menuItem: MenuItem;
}

function Dropdown({ menuItem }: DropdownProps) {
  return (
    <div className="flex items-center h-full">
      <NavigationAnchor
        menuItem={menuItem}
        className="hover:text-sky-500 dark:hover:text-sky-400 font-bold"
      />

      {!!menuItem.children?.length && (
        <div className="absolute top-18 left-[50%] translate-x-[-50%] pt-8 bg-white w-full border-b border-main-4 invisible">
          <div className="container">
            <div className="grid grid-cols-7 gap-[2rem] mx-2">
              {menuItem.children?.map(item => (
                <div key={item?.id}>
                  {item?.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-[1.8rem] leading-[2.16rem] font-bold cursor-pointer hover:underline"
                    >
                      {item?.name}
                    </a>
                  ) : (
                    <Link href={getLinkPath(item!)} passHref>
                      <a
                        href="pass"
                        className="inline-block text-[1.8rem] leading-[2.16rem] font-bold cursor-pointer hover:underline"
                      >
                        {item?.name}
                      </a>
                    </Link>
                  )}
                  {!!item?.children?.length && (
                    <ul className="list-none mt-3">
                      {item?.children?.map(sub => (
                        <li key={sub?.id}>
                          <Link href={getLinkPath(sub!)} passHref>
                            <a
                              href="pass"
                              className="text-base text-main-2 cursor-pointer hover:underline"
                            >
                              {sub?.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
