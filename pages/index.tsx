import clsx from 'clsx';

import { useFeedQuery } from '@/api';
import { composeDate } from '@/libs/util';
import { Spinner } from '@/components';
import TimeLineHead from '@/components/icons/timelinehead-icon.svg';

export function Home() {
  const { data, loading } = useFeedQuery({
    variables: {
      take: 10,
      orderBy: {
        updatedAt: 'desc',
      },
    },
  });

  return (
    <main>
      {loading && <Spinner />}

      <header className="py-16 sm:text-center">
        <h1
          className={clsx(
            'mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold',
            'dark:text-slate-200'
          )}
        >
          Latest Posts
        </h1>

        <p className="text-lg text-slate-700 dark:text-slate-400">
          All the latest posts, straight from the manager.
        </p>
      </header>

      <section
        className={clsx(
          'relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)]',
          'lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]'
        )}
      >
        <div
          className={clsx(
            'hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem]',
            'w-px bg-slate-200 dark:bg-slate-800 sm:block'
          )}
        />

        <div className="space-y-16">
          {data?.feed?.map(post => (
            <article key={post.id} className="relative group">
              <div
                className={clsx(
                  'absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6',
                  'sm:rounded-2xl group-hover:bg-slate-50/70',
                  'dark:group-hover:bg-slate-800/50'
                )}
              ></div>

              <TimeLineHead
                className={clsx(
                  'hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600',
                  'md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block'
                )}
              />

              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                  {post.title}
                </h3>

                <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                  <p>{post.content}</p>
                </div>

                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                    <time dateTime={post.updatedAt}>{composeDate(post.updatedAt)}</time>
                  </dd>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
