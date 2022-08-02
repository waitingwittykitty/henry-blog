import React, { useState } from 'react';
import { clsx } from 'clsx';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

import ContentEditor from '@/components/content-editor';
import { FeedDocument, PostCreateInput, useCreateDraftMutation } from '@/api';
import { stripTags } from '@/libs/util';

function PostCreate() {
  const router = useRouter();
  const [createDraftMutation] = useCreateDraftMutation();
  const [loading, setLoading] = useState(false);

  const {
    register,
    setValue,
    handleSubmit: submitWrapper,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<PostCreateInput>();

  const handleSubmit = submitWrapper(async (formData: PostCreateInput) => {
    setLoading(true);
    await createDraftMutation({
      variables: {
        data: formData,
      },
      refetchQueries: [{ query: FeedDocument }],
    });
    setLoading(false);
    toast.success('New post created!');
    router.push('/posts');
  });

  const handleChangeContent = (content: string) => {
    if (!stripTags(content)) {
      setError('content', { type: 'required', message: 'Content is required' });
    } else {
      clearErrors('content');
    }

    setValue('content', content);
  };

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

        <h1 className="text-3xl font-bold tracking-tight text-gray-800">Create Post</h1>
      </div>

      <form method="post" action="/posts" onSubmit={handleSubmit}>
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
          <ContentEditor onChange={handleChangeContent} />

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
            Create
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

export default PostCreate;
