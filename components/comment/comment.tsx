import { Comment } from '@/api';
import { composeDateTime, composeFullName } from '@/libs/util';

export type CommentProps = {
  comment: Comment;
};

function CommentCard({ comment }: CommentProps) {
  return (
    <article className="p-1 text-gray-800 text-sm flex border-b-2 border-gray-200">
      <p>{comment.content}</p>
      <span className="ml-2 mr-2"> - </span>
      <span className="text-sky-500">{composeFullName(comment.author!)}</span>
      <span className="ml-2 text-gray-500">{composeDateTime(comment.createdAt)}</span>
    </article>
  );
}

export default CommentCard;
