import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

export const useLogout = () => {
  const router = useRouter();
  const client = useApolloClient();

  const onLogout = async () => {
    localStorage.removeItem('henry-blog-token');
    await client.refetchQueries({ include: 'active' });
    await client.clearStore();
    router.push('/');
  };

  return onLogout;
};

export default useLogout;
