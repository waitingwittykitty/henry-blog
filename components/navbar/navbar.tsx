import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

import { useCurrentUserDetailsQuery } from '@/api';
import { usePaths } from '@/libs/paths';
import { Menu } from './menu';
import NavIconButton from './nav-icon-button';
import UserMenu from './user-menu';
import Spinner from '../spinner';

export function Navbar() {
  const paths = usePaths();
  const { data, loading } = useCurrentUserDetailsQuery({});

  if (loading) {
    return <Spinner />;
  }

  const isAnonymousUser = !data?.me;

  return (
    <div
      className={clsx(
        'sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500',
        'lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white',
        'supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'
      )}
    >
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Link href={paths.$url()} passHref>
              <a
                href="pass"
                className="mr-3 flex items-center w-[2.0625rem] overflow-hidden md:w-auto"
              >
                <span className="sr-only">Henry blog home page</span>

                <Image
                  src="/eye.png"
                  alt="Henry Blog logo"
                  width="24"
                  height="24"
                  layout="fixed"
                />

                <h1 className="font-[cursive] font-bold text-2xl ml-2">HENRY BLOG</h1>
              </a>
            </Link>

            <div className="relative hidden lg:flex items-center ml-auto">
              <Menu />

              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <Link href={paths.search.$url()} passHref>
                  <a href="pass">
                    <NavIconButton icon="spyglass" data-testid="searchIcon" />
                  </a>
                </Link>

                <a href="https://github.com/codinglittlecat/henry-blog" className="ml-6">
                  <span className="sr-only">Henry Blog on GitHub</span>

                  <NavIconButton icon="github" data-testid="githubIcon" />
                </a>

                {isAnonymousUser ? (
                  <Link href={paths.account.login.$url()} passHref>
                    <a href="pass" className="ml-6">
                      <NavIconButton icon="user" aria-hidden="true" />
                    </a>
                  </Link>
                ) : (
                  <UserMenu className="ml-6" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
