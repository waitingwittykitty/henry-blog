import Link from 'next/link';
import { FormattedNumber } from 'react-intl';
import { Post } from '@/api';
import { composeDateTimeDiff } from '@/libs/util';
import { UserMiniCard } from '../user-card';

export type PostMetaProps = {
  post: Post;
};

function PostMeta({ post }: PostMetaProps) {
  const handleToCreateComment = () => {
    if (document) {
      const element = document.getElementById('commentCreate') as HTMLTextAreaElement;
      element?.select();
    }
  };

  return (
    <UserMiniCard
      user={post.author!}
      actionBar={
        <Link href="#commentCreate">
          <button
            onClick={handleToCreateComment}
            className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg"
          >
            Add Comment
          </button>
        </Link>
      }
    >
      <div className="flex text-gray-400">
        <div className="mr-4">
          <span className="mr-2">Posted</span>
          <span className="text-gray-100">{composeDateTimeDiff(post.createdAt)}</span>
        </div>

        <div className="mr-4">
          <span className="mr-2">Modified</span>
          <span className="text-gray-100">{composeDateTimeDiff(post.updatedAt)}</span>
        </div>

        <div>
          <span className="mr-2">Viewed</span>
          <span className="mr-1 text-gray-100">
            <FormattedNumber
              notation="compact"
              compactDisplay="short"
              value={post.viewCount}
            />
          </span>
          <span className="text-gray-100">{post.viewCount === 1 ? 'time' : 'times'}</span>
        </div>
      </div>
    </UserMiniCard>
  );
}

export default PostMeta;
