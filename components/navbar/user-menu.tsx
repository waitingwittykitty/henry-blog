import clsx from 'clsx';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

import { useLogout } from '@/libs/auth';
import { usePaths } from '@/libs/paths';

import NavIconButton from './nav-icon-button';
import { useCurrentUserDetailsQuery } from '@/api';
import { composeFullName } from '@/libs/util';

type UserMenuProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

function UserMenu({ className, ...rest }: UserMenuProps) {
  const paths = usePaths();

  const onLogout = useLogout();
  const { data } = useCurrentUserDetailsQuery();

  return (
    <div className={clsx('group relative', className)} {...rest}>
      <div className="flex">
        <NavIconButton icon="user" aria-hidden="true" />

        <span className="select-none font-mono ml-2">
          {composeFullName(data?.me?.firstName!, data?.me?.lastName!)}
        </span>
      </div>

      <div
        className={clsx(
          'absolute top-[100%] right-0 shadow-modal flex flex-col',
          'invisible group-hover:visible'
        )}
      >
        <Link href={paths.account.preferences.$url()} passHref>
          <a
            tabIndex={0}
            className={clsx(
              'px-4 pt-[14px] pb-[13px] text-base font-medium cursor-pointer',
              'flex items-center whitespace-nowrap hover:text-brand'
            )}
            href="pass"
          >
            Account preferences
          </a>
        </Link>

        <button
          type="button"
          onClick={onLogout}
          tabIndex={-1}
          className={clsx(
            'px-4 pt-[14px] pb-[13px] text-base font-medium cursor-pointer flex',
            'items-center whitespace-nowrap hover:text-brand'
          )}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default UserMenu;
