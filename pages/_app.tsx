import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styles from '../styles';
import Layout from '../components/Layout';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface IGlobalContext {
  isLogin?: boolean;
  setIsLogin?: Dispatch<SetStateAction<boolean>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [isLogin, setIsLogin] = useState(false);
  const value = {
    isLogin,
    setIsLogin,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={value}>
        <Layout>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <Global styles={styles} />
          </Hydrate>
        </Layout>
      </GlobalContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
