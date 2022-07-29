import clsx from 'clsx';
import Link from 'next/link';
import { Fragment, HTMLAttributes } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

import { useLogout } from '@/libs/auth';

import NavIconButton from './nav-icon-button';
import { useCurrentUserDetailsQuery } from '@/api';
import { composeFullName } from '@/libs/util';

type UserMenuProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

function UserMenu({ className, ...rest }: UserMenuProps) {
  const onLogout = useLogout();
  const { data } = useCurrentUserDetailsQuery();

  return (
    <Menu as="div" className={clsx('group relative', className)} {...rest}>
      <div>
        <Menu.Button as="div" className="flex cursor-pointer">
          <NavIconButton icon="user" aria-hidden="true" />

          <span className="select-none font-mono ml-2">
            {composeFullName(data?.me?.firstName!, data?.me?.lastName!)}
          </span>

          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <div>
                  <Link href="/account/preferences" passHref>
                    <a
                      className={clsx(
                        'px-4 pt-[14px] pb-[13px] text-base font-medium cursor-pointer',
                        'flex items-center whitespace-nowrap hover:text-brand rounded',
                        {
                          'bg-violet-500 text-white': active,
                          'text-gray-900': !active,
                        }
                      )}
                      href="pass"
                      role="menuitem"
                    >
                      Account preferences
                    </a>
                  </Link>
                </div>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  onClick={onLogout}
                  className={clsx(
                    'px-4 pt-[14px] pb-[13px] text-base font-medium cursor-pointer',
                    'flex items-center whitespace-nowrap hover:text-brand w-full',
                    'rounded',
                    {
                      'bg-violet-500 text-white': active,
                      'text-gray-900': !active,
                    }
                  )}
                >
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
