import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

import { usePaths } from '@/libs/paths';

export const useLogout = () => {
  const router = useRouter();
  const client = useApolloClient();
  const paths = usePaths();

  const onLogout = async () => {
    localStorage.removeItem('henry-blog-token');
    await client.refetchQueries({ include: 'active' });
    // await client.resetStore();
    router.push(paths.$url());
  };

  return onLogout;
};

export default useLogout;
