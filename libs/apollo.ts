import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_SERVER } from './const';

const httpLink = createHttpLink({
  uri: GRAPHQL_SERVER,
});

const authLink = setContext((_, { headers }) => {
  let token = null;

  if (global.localStorage) {
    token = localStorage.getItem('henry-blog-token');
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;
