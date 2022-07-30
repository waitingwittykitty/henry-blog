import React from 'react';
import { ChatIcon, ClockIcon, EyeIcon } from '@heroicons/react/outline';

import type { PostDetailsFragment } from '@/api';
import { UserMiniCard } from '../user-card';
import { composeDateTimeDiff } from '@/libs/util';

export interface PostCardProps {
  post: PostDetailsFragment;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex border-2 rounded-lg">
      <div className="bg-sky-900 rounded-l-lg p-6 basis-80 shrink-0">
        {/* <MetaTags  /> */}
        <UserMiniCard user={post.author!}>
          <time className="flex text-white text-sm">
            <ClockIcon width={22} height={22} className="mr-2 text-sky-500" />
            <span className="mr-1">posted</span>
            <span title={post.createdAt}>{composeDateTimeDiff(post.createdAt)}</span>
          </time>
        </UserMiniCard>
      </div>

      <div className="pl-11 pt-5 pr-8 grow">
        <h3 className="font-semibold text-gray-900 pb-3">{post.title}</h3>

        <p className="line-clamp-2">{post.content}</p>

        <div className="flex text-gray-600 pt-5">
          <div className="flex ml-auto mr-4">
            <EyeIcon width={22} height={22} className="mr-2 text-sky-500" />
            <span className="mr-1">{post.viewCount}</span>
            <span>{post.viewCount === 1 ? 'View' : 'Views'}</span>
          </div>

          <div className="flex">
            <ChatIcon width={22} height={22} className="mr-2 text-sky-500" />
            <span className="mr-1">{post.viewCount}</span>
            <span>{post.viewCount === 1 ? 'Comment' : 'Comments'}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
