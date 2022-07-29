import React from 'react';
import Link from 'next/link';

import { useFeedQuery } from '@/api';
import Sidebar from '@/components/sidebar';
import NoData from '@/components/no-data';
import PostList from '@/components/post-list';
import { Spinner } from '@/components';

function Posts() {
  const { data, loading } = useFeedQuery();

  const hasNoData = !data || data?.feed?.length <= 0;

  return (
    <section className="flex">
      <Sidebar />

      <section className="p-6 flex-grow">
        <div className="flex">
          <h1 className="flex-auto text-2xl">All Posts</h1>

          <Link href="/posts/create">
            <a className="btn bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded">
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
