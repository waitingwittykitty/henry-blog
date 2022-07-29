import React from 'react';

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
      <div className="flex">
        <UserAvatar width={78} height={78} user={user} />

        <a>{composeFullName(user?.firstName!, user?.lastName!)}</a>
      </div>

      {children}
    </div>
  );
}

export default UserMiniCard;
