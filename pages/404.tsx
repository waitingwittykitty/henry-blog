import Link from 'next/link';
import React from 'react';
import { HomeIcon } from '@heroicons/react/outline';

function Custom404() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="py-10">
          <header className="mb-4">
            <div className="container px-8 text-xl">Page not found</div>
          </header>

          <main>
            <div className="container px-8 hover:text-slate-500">
              <Link href="/" passHref>
                <a href="pass" className="flex">
                  <HomeIcon className="mr-2" width={20} height={20} /> Go back home
                </a>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Custom404;
