import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import OnCart from './OnCart';
import PaymentBtn from './PaymentBtn';
import { useStateContext } from './StateContext';

type LayoutProps = {
  children: React.ReactNode;
};


const Layout = ({ children }: LayoutProps) => {
  return (
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
      <br />
      <div className='tools'>
        <h2>Dev tools</h2>
        <h3>
          <OnCart />
          <PaymentBtn />
        </h3>
      </div>

      <h1>Welcome to Next.js Shopping Cart</h1>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Footer Shopping Cart</p>
      </footer>
    </div>
  )
};

export default Layout;
