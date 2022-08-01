import React from 'react';
import { FormattedNumber } from 'react-intl';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChatIcon, ClockIcon, EyeIcon } from '@heroicons/react/outline';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import {
  FeedDocument,
  PostDetailsFragment,
  useCurrentUserDetailsQuery,
  useDeletePostMutation,
} from '@/api';
import { composeDateTimeDiff } from '@/libs/util';
import { UserMiniCard } from '../user-card';

export interface PostCardProps {
  post: PostDetailsFragment;
}

function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const { data } = useCurrentUserDetailsQuery();
  const [deletePost] = useDeletePostMutation();

  const isPostOwner = post.author?.id === data?.me?.id;

  const handleDelete = () => {
    confirmAlert({
      title: 'Delete Post',
      message: 'Are you sure to delete the post?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await deletePost({
              variables: { deletePostId: post.id },
              refetchQueries: [{ query: FeedDocument }],
            });
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <article className="flex border-2 rounded-lg">
      <div className="bg-sky-900 rounded-l-lg p-6 basis-80 shrink-0">
        {/* <MetaTags  /> */}

        <UserMiniCard user={post.author!}>
          <time className="flex text-white text-sm">
            <ClockIcon width={22} height={22} className="mr-2 text-sky-500" />

            <span className="mr-1">Posted</span>

            <span title={post.createdAt}>{composeDateTimeDiff(post.createdAt)}</span>
          </time>
        </UserMiniCard>
      </div>

      <div className="pl-11 pt-5 pr-8 grow">
        <Link href={`/posts/${post.id}?next=${router.pathname}`} passHref>
          <a>
            <h3 className="font-semibold text-gray-900 hover:text-sky-900 pb-3">
              {post.title}
            </h3>
          </a>
        </Link>

        <p className="line-clamp-2">{post.content}</p>

        <div className="flex text-gray-600 pt-5">
          <div className="flex ml-auto mr-4">
            <EyeIcon width={22} height={22} className="mr-2 text-sky-500" />

            <span className="mr-1">{post.viewCount}</span>

            <span>{post.viewCount === 1 ? 'View' : 'Views'}</span>
          </div>

          <div className="flex">
            <ChatIcon width={22} height={22} className="mr-2 text-sky-500" />

            <span className="mr-1">
              <FormattedNumber
                notation="compact"
                compactDisplay="short"
                value={post.commentCount}
              />
            </span>
            <span>{post.commentCount === 1 ? 'Comment' : 'Comments'}</span>
          </div>
        </div>
      </div>

      <div className="basis-16 shrink-0 flex flex-col">
        <Link href={`/posts/${post.id}?next=${router.pathname}`} passHref>
          <a
            href="pass"
            className={clsx(
              'bg-sky-500 text-white flex flex-1 items-center',
              'justify-center first:rounded-tr-lg last:rounded-br-lg'
            )}
          >
            <span className="writing-vertical">View {isPostOwner ? '' : 'More'}</span>
          </a>
        </Link>

        {isPostOwner && (
          <Link href={`/posts/${post.id}/edit`} passHref>
            <a
              href="pass"
              className={clsx(
                'bg-sky-900 text-white flex flex-1 items-center',
                'justify-center first:rounded-tr-lg last:rounded-br-lg'
              )}
            >
              <span className="writing-vertical">Edit</span>
            </a>
          </Link>
        )}

        {isPostOwner && (
          <button
            className={clsx(
              'bg-red-900 text-white flex flex-1 items-center',
              'justify-center first:rounded-tr-lg last:rounded-br-lg'
            )}
            onClick={handleDelete}
          >
            <span className="writing-vertical">Delete</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default PostCard;
