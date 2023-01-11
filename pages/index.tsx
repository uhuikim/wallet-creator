import type { NextPage } from 'next';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>내용내용</div>
    </Layout>
  );
};

export default Home;
