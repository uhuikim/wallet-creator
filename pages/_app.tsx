import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import styles from '../styles';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Global styles={styles} />
    </Layout>
  );
}

export default MyApp;
