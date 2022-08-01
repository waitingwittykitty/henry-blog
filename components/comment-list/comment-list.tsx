import { Comment, Post, useCommentsByPostQuery } from '@/api';
import CommentCard from '../comment';
import CommentCreate from '../comment-create';

export interface CommentListProps {
  post: Post;
}

function CommentList({ post }: CommentListProps) {
  const { data } = useCommentsByPostQuery({ variables: { postId: post.id } });
  const comments = data?.commentsByPost! as Comment[];

  return (
    <>
      {comments?.map(comment => (
        <CommentCard key={comment?.id} comment={comment!} />
      ))}

      <CommentCreate post={post} />
    </>
  );
}

export default CommentList;
