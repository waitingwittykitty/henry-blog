import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

import { getLinkPath } from '@/libs/menus';
import { usePaths } from '@/libs/paths';

import { Box } from '../box';
import menu from './footer-menu.json';

type MenuItem = {
  id: string;
  url?: string;
  name: string;
  children?: MenuItem[];
};

const menuItems = menu as MenuItem[];

export type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer({ className, ...rest }: FooterProps) {
  const paths = usePaths();

  return (
    <footer
      className={clsx('sm:container mx-auto mb-18 sm:mb-15 mt-16', className)}
      {...rest}
    >
      <Box className="p-6 border-l-0 border-r-0 sm:border-l-2 sm:border-r-2">
        <div className="flex mb-14 sm:mb-10">
          <Link href={paths.$url()} passHref>
            <a href="pass" className="hidden sm:inline-block">
              <div className="mt-px flex items-center block relative grayscale">
                <Image
                  src="/eye.png"
                  alt="Henry Blog logo"
                  width="48"
                  height="48"
                  layout="fixed"
                />

                <h1 className="font-[cursive] font-bold text-2xl ml-2">HENRY BLOG</h1>
              </div>
            </a>
          </Link>

          <div className="grid grid-cols-2 gap-[2rem] w-full sm:w-auto sm:flex sm:flex-wrap sm:justify-end sm:ml-auto">
            {menuItems.map(item => (
              <div className="sm:ml-14" key={item?.id}>
                {item?.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-md font-bold mb-4 cursor-pointer hover:underline"
                  >
                    {item?.name}
                  </a>
                ) : (
                  <Link href={getLinkPath(item!)} passHref>
                    <a
                      href="pass"
                      className="block text-md font-bold mb-4 cursor-pointer hover:underline"
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
                            data-testid={`footerExternalLinks${sub?.name}`}
                          >
                            {sub?.name}
                          </a>
                        ) : (
                          <Link href={getLinkPath(sub!)} passHref>
                            <a
                              href="pass"
                              className="text-base cursor-pointer hover:underline"
                              data-testid={`footerInternalLinks${sub?.name}`}
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
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-main-3 flex-grow">
            © Copyright 2022 - {new Date().getFullYear()} Henry Blog
          </p>
        </div>
      </Box>
    </footer>
  );
}

export default Footer;
