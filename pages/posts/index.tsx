import React from 'react';
import cx from 'clsx';
import Link from 'next/link';

import { useCurrentUserDetailsQuery, useFeedQuery } from '@/api';
import Sidebar from '@/components/sidebar';
import NoData from '@/components/no-data';
import PostCard from '@/components/post-card';
import { Spinner } from '@/components';

function Posts() {
  const { data, loading } = useFeedQuery();
  const { data: currentUserResponse } = useCurrentUserDetailsQuery({});

  if (loading) {
    return <Spinner />;
  }

  const isAnonymousUser = !currentUserResponse?.me!;

  const hasNoData = !data || data?.feed?.length <= 0;

  return (
    <main className="flex">
      <Sidebar className="shrink-0" />

      <section className="p-6 flex-grow">
        <div className="flex mb-5">
          <h1 className="flex-auto text-2xl">All Posts</h1>

          <Link
            href={isAnonymousUser ? '/account/login?next=/posts/create' : '/posts/create'}
          >
            <a
              className={cx(
                'w-40 bg-sky-500 hover:bg-sky-600 text-white',
                'py-2 transition duration-100 rounded-md text-center'
              )}
            >
              Create Post
            </a>
          </Link>
        </div>

        <div>
          {loading && <Spinner />}
          {hasNoData ? (
            <NoData caption="No Posts" />
          ) : (
            <ul>
              {data?.feed!.map(post => (
                <li key={post?.id} className="mb-5">
                  <PostCard post={post!} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

export default Posts;
