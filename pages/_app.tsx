import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '@/components';
import client from '@/libs/apollo';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <ToastContainer />
      </>
    </ApolloProvider>
  );
}

export default MyApp;
