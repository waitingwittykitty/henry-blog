import React, { useState } from 'react';
import { clsx } from 'clsx';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { ApolloQueryResult } from '@apollo/client';

import ContentEditor from '@/components/content-editor';
import {
  FeedDocument,
  PostByIdDocument,
  PostByIdQuery,
  PostByIdQueryVariables,
  PostUpdateInput,
  useUpdatePostMutation,
} from '@/api';
import client from '@/libs/apollo';
import Custom404 from '@/pages/404';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const postId = Number(context.params?.slug!);
  const response: ApolloQueryResult<PostByIdQuery> = await client.query<
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

function PostEdit({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [updatePostMutation] = useUpdatePostMutation({
    refetchQueries: [
      { query: PostByIdDocument, variables: { postByIdId: post?.id } },
      { query: FeedDocument },
    ],
  });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit: submitWrapper,
    formState: { errors },
  } = useForm<PostUpdateInput>({
    defaultValues: { title: post?.title, content: post?.content },
  });

  const handleSubmit = submitWrapper(async (formData: PostUpdateInput) => {
    if (post?.id) {
      setLoading(true);
      await updatePostMutation({
        variables: {
          updatePostId: post?.id!,
          data: formData,
        },
        refetchQueries: [{ query: FeedDocument }],
      });
      setLoading(false);
      toast.success('The post updated!');
      router.push(`/posts/${post?.id!}`);
    }
  });

  if (!post?.id) {
    return <Custom404 />;
  }

  return (
    <section>
      <h1 className="text-2xl p-5">Update Post</h1>

      <form action={`/posts/${post.id}/update`} onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex items-center">
            <label className="mr-2" htmlFor="title">
              Title *
            </label>

            <input
              className="flex-auto px-4 border-2 py-2 rounded-md text-sm outline-none"
              type="title"
              id="title"
              {...register('title', { required: 'Title is required' })}
            />
          </div>

          {!!errors.title && (
            <p className="text-sm text-red-500 pt-2">{errors.title.message}</p>
          )}
        </div>

        <div>
          <ContentEditor {...register('content')} />

          {!!errors.content && (
            <p className="text-sm text-red-500 pt-2">{errors.content.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={clsx(
            'mt-2 w-40 bg-green-500 hover:bg-green-400 text-white',
            'py-2 rounded-md transition duration-100'
          )}
          disabled={loading}
        >
          Update
        </button>
      </form>
    </section>
  );
}

export default PostEdit;
