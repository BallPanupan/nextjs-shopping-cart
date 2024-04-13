import { useEffect, useState } from 'react';
import { useStateContext } from '@/components/StateContext';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Head from 'next/head';
export default function ProductDetail() {
  const { sharedState, setSharedState } = useStateContext();

  const [session, setSession] = useState<string>();

  const router = useRouter();
  const { productId } = router.query;

  // useEffect(() => {
  //   setSession(sharedState.message);
  // }, [sharedState]);

  return (


    <div>
      <Layout>
        <Head>
          <title>Next.js Shopping Cart</title>
          <meta name="description" content="Next.js Shopping Cart" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Welcome to Next.js Shopping Cart</h1>
        <div className="content">
          {/* <Cart cart={cart} removeFromCart={removeFromCart} /> */}
          {/* <h2>Categorie: {selectCategorie || 'none'}</h2> */}

          <div className="shopping">

            <div className="container app-center">
              <div className="row">

                <div>
                  <h1>About Page</h1>
                  Select: {session}
                  productId: {productId}
                </div>

              </div>
            </div>

          </div>





        </div>
      </Layout>
    </div>

  );
}
