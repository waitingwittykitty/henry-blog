import Link from 'next/link';
import React from 'react';

export function NavigationPanel() {
  const linkClassname =
    'flex p-4 items-center w-full rounded-md shadow-sm h-10 hover:text-blue-500';

  return (
    <div className="group w-full md:w-4/5 cursor-default rounded-md bg-white">
      <Link href="/account/preferences" passHref>
        <a href="pass" className="text-black">
          <span className={linkClassname}>Account preferences</span>
        </a>
      </Link>
    </div>
  );
}

export default NavigationPanel;
