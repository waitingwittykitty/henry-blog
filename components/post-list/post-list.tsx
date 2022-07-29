import React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

import type { PostDetailsFragment } from '@/api';
import { UserMiniCard } from '../user-card';
import { composeDateTimeDiff } from '@/libs/util';

export interface PostListProps {
  data: PostDetailsFragment[];
}

function PostList({ data }: PostListProps) {
  return (
    <ul>
      {data.map(post => (
        <li key={post.id} className="flex">
          <aside className="mr-4">
            <div>
              <span className="mr-1">{post.viewCount}</span>
              <span>comments</span>
            </div>
          </aside>

          <article>
            <h3 className="text-blue-500">{post.title}</h3>
            <div>
              {/* <MetaTags  /> */}
              <UserMiniCard user={post.author!}>
                <time className="flex">
                  <ClockIcon width={22} height={22} className="mr-2" />
                  <span className="mr-1">posted</span>
                  <span title={post.createdAt}>
                    {composeDateTimeDiff(post.createdAt)}
                  </span>
                </time>
              </UserMiniCard>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
