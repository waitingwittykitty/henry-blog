import { UserDetailsFragment } from '@/api';
import { composeFullName } from '@/libs/util';
import DefaultAvatar from '../icons/default-avatar.svg';
import Image from 'next/image';

export interface UserAvatarProps {
  user: UserDetailsFragment;
  width?: number;
  height?: number;
  className?: string;
}

function UserAvatar({ user, ...rest }: UserAvatarProps) {
  return user?.avatar ? (
    <Image
      src={user.avatar}
      alt={composeFullName(user.firstName!, user.lastName!)}
      {...rest}
    />
  ) : (
    <DefaultAvatar {...rest} />
  );
}

export default UserAvatar;
