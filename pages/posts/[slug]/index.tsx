import { ApolloQueryResult } from '@apollo/client';
import clsx from 'clsx';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import React from 'react';

import Custom404 from '@/pages/404';
// import { RichText } from '@/components';
import apolloClient from '@/libs/apollo';
import { PostByIdDocument, PostByIdQuery, PostByIdQueryVariables } from '@/api';
import { composeFullName } from '@/libs/util';

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
  if (!post?.id) {
    return <Custom404 />;
  }

  const content = post?.content;

  return (
    <>
      <main
        className={clsx(
          'grid grid-cols-1 gap-4 max-h-full overflow-auto md:overflow-hidden container pt-8 px-8 md:grid-cols-3'
        )}
      >
        <div className="space-y-5 mt-10 md:mt-0">
          <div>
            <h1
              className="text-4xl font-bold tracking-tight text-gray-800"
              data-testid="postName"
            >
              {post?.title}
            </h1>

            <h2 className="text-xl font-bold tracking-tight text-gray-800">
              {composeFullName(post?.author?.firstName!, post?.author?.lastName!)}
            </h2>
          </div>

          {content && (
            <div className="space-y-6">
              {/* <RichText jsonStringData={content} /> */}
              {content}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default PostPage;
