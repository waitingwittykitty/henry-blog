import React from 'react';
import classNames from 'clsx';

import { UserDetailsFragment } from '@/api';
import { composeFullName } from '@/libs/util';
import UserAvatar from './user-avatar';

export interface UserMiniCardProps {
  user: UserDetailsFragment;
  children?: React.ReactNode;
}

function UserMiniCard({ user, children }: UserMiniCardProps) {
  return (
    <div>
      <div
        className={classNames(
          'flex text-white uppercase border-b-2 border-b-sky-800 pb-3 mb-3 items-center'
        )}
      >
        <UserAvatar className="mr-6" width={78} height={78} user={user} />

        <a>{composeFullName(user?.firstName!, user?.lastName!)}</a>
      </div>

      {children}
    </div>
  );
}

export default UserMiniCard;
