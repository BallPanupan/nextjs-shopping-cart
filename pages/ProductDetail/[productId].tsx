import { useEffect, useState } from 'react';
import { useStateContext } from '@/components/StateContext';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Categories from '@/components/Categories';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
};


export default function ProductDetail() {
  const { sharedState, setSharedState } = useStateContext();

  const [detail, setetail] = useState<Product>();

  const router = useRouter();
  const { productId } = router.query;

  async function fetchData(productId?: string) {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    const fetchProductDetail = async (productId?: string) => {
      const data = await fetchData(productId);
      setetail(data || {});
    };

    if (typeof productId === 'string') {
      fetchProductDetail(productId);
    }
  }, [productId]);

  console.log(detail);

  const MultiImage = () => {
    if (detail && detail.images.length > 0) {
      return (
        detail.images.map((data, index) => {
          return (
            <Image
            key={index}
            src={data || ''}
            alt={detail?.description || ''}
            width={720}
            height={600}
            loading="lazy"
          />
          )
        })
      )
    }
    return;
  }

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

                <div className="col-sm">
                  <Categories />
                </div>

                <div className="col-sm">

                  <div className='product-detail'>
                    {/* Select: {session} */}
                    {/* productId: {productId} */}
                    {/* <p>raw detail: {detail?.title}</p> */}
                    <div className='item-product'>
                      <div className="item-detail">
                        <div >
                          <Image
                            src={detail?.thumbnail || ''}
                            alt={detail?.description || ''}
                            width={720}
                            height={600}
                            loading="lazy"
                          />
                        </div>
                        <span>{detail?.title}</span>
                        <p>{detail?.description}</p>
                        <p>{detail?.price}</p>
                        <p>rating: {detail?.rating}</p>
                        <p>stock: {detail?.stock}</p>
                        <p>brand: {detail?.brand}</p>
                        <p>category: {detail?.category}</p>
                  			<button>Add to cart</button>

                      </div>
                      <MultiImage/>

                      <button>Add to cart</button>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>
      </Layout>
    </div>

  );
}
