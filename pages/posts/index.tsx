import React from 'react';
import Link from 'next/link';

import { useCurrentUserDetailsQuery, useFeedQuery } from '@/api';
import Sidebar from '@/components/sidebar';
import NoData from '@/components/no-data';
import PostList from '@/components/post-list';
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
    <section className="flex">
      <Sidebar className="shrink-0" />

      <section className="p-6 flex-grow">
        <div className="flex mb-5">
          <h1 className="flex-auto text-2xl">All Posts</h1>

          <Link
            href={isAnonymousUser ? '/account/login?next=/posts/create' : '/posts/create'}
          >
            <a className="btn bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg">
              Create Post
            </a>
          </Link>
        </div>

        <div>
          {loading && <Spinner />}
          {hasNoData ? <NoData caption="No Posts" /> : <PostList data={data?.feed} />}
        </div>
      </section>
    </section>
  );
}

export default Posts;
