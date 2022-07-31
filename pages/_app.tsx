import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import { IntlProvider } from 'react-intl';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '@/components';
import client from '@/libs/apollo';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale="en">
        <Head>
          <title>Henry Blog</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>

        <ToastContainer />
      </IntlProvider>
    </ApolloProvider>
  );
}

export default MyApp;
