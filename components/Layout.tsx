import Head from 'next/head';
import styles from '../styles/Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Next.js Shopping Cart"
      />
      <meta
        name="og:title"
        content="Next.js Shopping Cart"
      />
    </Head>
    <header className={styles.header}>
      <h1>Next.js Shopping Cart</h1>
    </header>
    <main>{children}</main>
    <footer className={styles.footer}>
      <p>Footer Shopping Cart</p>
    </footer>
  </div>
);

export default Layout;
