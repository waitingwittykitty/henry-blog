import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import type { ApolloQueryResult } from '@apollo/client';
import clsx from 'clsx';

import Custom404 from '@/pages/404';
// import { RichText } from '@/components';
import apolloClient from '@/libs/apollo';
import { Post, PostByIdDocument, PostByIdQuery, PostByIdQueryVariables } from '@/api';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import PostMeta from '@/components/post-meta';
import CommentList from '@/components/comment-list';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const postId = Number(context.params?.slug!);
  const response: ApolloQueryResult<PostByIdQuery> = await apolloClient.query<
    PostByIdQuery,
    PostByIdQueryVariables
  >({
    query: PostByIdDocument,
    variables: {
      postByIdId: postId,
    },
  });

  return {
    props: {
      post: response.data.postById,
    },
    revalidate: 60,
  };
};

function PostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!post?.id) {
    return <Custom404 />;
  }

  const content = post?.content;

  return (
    <main
      className={clsx('max-h-full overflow-auto md:overflow-hidden container pt-8 px-8')}
    >
      <div className="space-y-5 mt-10 md:mt-0">
        <article>
          <div className="flex mb-4">
            <button
              className="mr-2 text-gray-500 hover:text-gray-900"
              onClick={() =>
                router.push(router.query.next ? String(router.query.next) : '/posts')
              }
            >
              <ArrowCircleLeftIcon width={50} />
            </button>

            <h1
              className="text-3xl font-bold tracking-tight text-gray-800"
              data-testid="postName"
            >
              {post?.title}
            </h1>
          </div>

          <div className="bg-sky-900 p-4">
            <PostMeta post={post as Post} />
          </div>
        </article>

        {content && (
          <div className="space-y-6">
            {/* <RichText jsonStringData={content} /> */}
            <p>{content}</p>
          </div>
        )}

        <div className="ml-40">
          <CommentList post={post as Post} />
        </div>
      </div>
    </main>
  );
}

export default PostPage;
