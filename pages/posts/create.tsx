import React from 'react';
import { clsx } from 'clsx';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import ContentEditor from '@/components/content-editor';
import { FeedDocument, PostCreateInput, useCreateDraftMutation } from '@/api';

function PostCreate() {
  const router = useRouter();
  const [createDraftMutation] = useCreateDraftMutation();

  const {
    register,
    handleSubmit: submitWrapper,
    formState: { errors },
  } = useForm<PostCreateInput>();

  const handleSubmit = submitWrapper(async (formData: PostCreateInput) => {
    await createDraftMutation({
      variables: {
        data: formData,
      },
      refetchQueries: [{ query: FeedDocument }],
    });

    toast.success('New post created!');
    router.push('/posts');
  });

  return (
    <section>
      <h1 className="text-2xl p-5">Create Post</h1>

      <form action="/posts/create" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex items-center">
            <label className="mr-2" htmlFor="title">
              Title *
            </label>

            <input
              className="flex-auto px-4 border-2 py-2 rounded-md text-sm outline-none"
              type="title"
              id="title"
              {...register('title', { required: 'The field Title is required' })}
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
        >
          Create
        </button>
      </form>
    </section>
  );
}

export default PostCreate;
