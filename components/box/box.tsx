import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  shadowless?: boolean;
}

export function Box({ className, ...rest }: BoxProps) {
  return (
    <div
      className={clsx(
        'bg-white border-2 border-main shadow-decorative-center sm:shadow-decorative',
        className
      )}
      {...rest}
    />
  );
}

export default Box;
