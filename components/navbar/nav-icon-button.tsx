import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

import Bag from '../icons/bag-icon.svg';
import Close from '../icons/close-icon.svg';
import MenuIcon from '../icons/menu-icon.svg';
import Spyglass from '../icons/spyglass-icon.svg';
import User from '../icons/user-icon.svg';
import GitHub from '../icons/github-icon.svg';

interface NavIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: 'user' | 'bag' | 'spyglass' | 'menu' | 'close' | 'github';
  counter?: number;
}

const iconMap = {
  user: <User />,
  bag: <Bag />,
  spyglass: <Spyglass />,
  menu: <MenuIcon />,
  close: <Close />,
  github: <GitHub />,
};

function NavIconButton({ icon, counter, ...rest }: NavIconButtonProps) {
  const Icon = iconMap[icon] ?? <i>{icon}</i>;

  return (
    <button
      type="button"
      className="w-6 h-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
      {...rest}
    >
      {Icon}

      {!!counter && (
        <span
          className={clsx(
            'absolute bottom-2 right-2 translate-x-[50%] translate-y-[50%] bg-brand',
            'text-white flex justify-center items-center rounded h-[14px] px-1',
            'text-[1rem] leading-[1rem]'
          )}
        >
          {counter}
        </span>
      )}
    </button>
  );
}

export default NavIconButton;
