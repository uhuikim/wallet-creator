import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styles from '../styles';
import Layout from '../components/Layout';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalProvider from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <Global styles={styles} />
          </Hydrate>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </GlobalProvider>
  );
}

export default MyApp;
