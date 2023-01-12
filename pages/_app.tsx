import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styles from '../styles';
import Layout from '../components/Layout';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
interface IGlobalContext {
  isLogin?: boolean;
  setIsLogin?: Dispatch<SetStateAction<boolean>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState(false);
  const value = {
    isLogin,
    setIsLogin,
  };

  return (
    <GlobalContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
        <Global styles={styles} />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default MyApp;
