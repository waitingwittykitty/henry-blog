import clsx from 'clsx';

import SpyGlassIcon from '../icons/spyglass-icon.svg';

function SidebarStickySection() {
  return (
    <section className="sticky top-0 -ml-0.5 pointer-events-none">
      <div className="h-10 bg-white dark:bg-slate-900"></div>

      <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
        <button
          className={clsx(
            'hidden w-full lg:flex items-center text-sm leading-6 text-slate-400',
            'rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3',
            'hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5',
            'dark:hover:bg-slate-700'
          )}
        >
          <SpyGlassIcon />
        </button>
      </div>

      <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
    </section>
  );
}

export default SidebarStickySection;
