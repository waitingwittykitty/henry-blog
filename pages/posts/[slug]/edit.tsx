import React, { useState } from 'react';
import { clsx } from 'clsx';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

import ContentEditor from '@/components/content-editor';
import {
  FeedDocument,
  PostByIdDocument,
  PostUpdateInput,
  usePostByIdQuery,
  useUpdatePostMutation,
} from '@/api';
import Custom404 from '@/pages/404';
import { stripTags } from '@/libs/util';

function PostEdit() {
  const router = useRouter();
  const postId = Number(router.query.slug);

  const {
    register,
    handleSubmit: submitWrapper,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
  } = useForm<PostUpdateInput>();

  const { data, loading: postLoading } = usePostByIdQuery({
    variables: { postByIdId: postId },
    onCompleted: data => {
      setValue('title', data?.postById?.title!);
      setValue('content', data?.postById?.content!);
    },
  });

  const [updatePostMutation] = useUpdatePostMutation({
    refetchQueries: [
      { query: PostByIdDocument, variables: { postByIdId: postId } },
      { query: FeedDocument },
    ],
  });
  const [loading, setLoading] = useState(false);

  const post = data?.postById;

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

  const handleChangeContent = (content: string) => {
    if (!stripTags(content)) {
      setError('content', { type: 'required', message: 'Content is required' });
    } else {
      clearErrors('content');
    }

    setValue('content', content);
  };

  if (!post?.id) {
    return <Custom404 />;
  }

  return (
    <main>
      <div className="flex mb-4 items-center mt-4">
        <button
          className="mr-2 text-gray-500 hover:text-gray-900"
          onClick={() =>
            router.push(router.query.next ? String(router.query.next) : '/posts')
          }
        >
          <ArrowCircleLeftIcon width={50} />
        </button>

        <h1 className="text-3xl font-bold tracking-tight text-gray-800">Update Post</h1>
      </div>

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
          {!postLoading && (
            <ContentEditor value={post.content} onChange={handleChangeContent} />
          )}

          {!!errors.content && (
            <p className="text-sm text-red-500 pt-2">{errors.content.message}</p>
          )}
        </div>

        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className={clsx(
              'w-40 bg-green-500 hover:bg-green-400 text-white',
              'py-2 transition duration-100 first:rounded-l-md last:rounded-r-md'
            )}
            disabled={loading}
          >
            Update
          </button>

          <button
            type="button"
            className={clsx(
              'w-40 bg-pink-500 hover:bg-pink-400 text-white',
              'py-2 transition duration-100 first:rounded-l-md last:rounded-r-md'
            )}
            disabled={loading}
            onClick={() =>
              router.push(router.query.next ? String(router.query.next) : '/posts')
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}

export default PostEdit;
