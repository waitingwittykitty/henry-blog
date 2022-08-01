import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  CommentCreateInput,
  CommentsByPostDocument,
  FeedDocument,
  Post,
  useCreateCommentMutation,
} from '@/api';
import clsx from 'clsx';

export type CommentCreateProps = {
  post: Post;
};

function CommentCreate({ post }: CommentCreateProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentCreateInput>();

  const [createComment] = useCreateCommentMutation();

  const onSubmit = handleSubmit(async data => {
    await createComment({
      variables: { data },
      refetchQueries: [
        { query: CommentsByPostDocument, variables: { postId: post.id } },
        { query: FeedDocument },
      ],
    });

    toast.success('New comment created!');
  });

  return (
    <form className="mt-2" onSubmit={onSubmit}>
      <h1 className="text-lg text-gray-800 mb-2"> Add Comment </h1>

      <input hidden {...register('postId')} value={String(post.id)} />

      <textarea
        id="commentCreate"
        className={clsx(
          'appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5',
          'sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-3',
          'pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2',
          'focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20',
          'dark:focus:ring-sky-500 dark:text-white'
        )}
        rows={3}
        {...register('content', { required: true })}
      />

      {errors.content && <span>Content is required</span>}

      <button
        type="submit"
        className={clsx(
          'ml-auto mt-2 w-40 bg-green-500 hover:bg-green-400 text-white',
          'py-2 rounded-md transition duration-100'
        )}
      >
        Submit
      </button>
    </form>
  );
}

export default CommentCreate;
