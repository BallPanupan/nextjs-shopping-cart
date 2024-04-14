// category
import { useEffect, useState } from 'react';
import { useStateContext } from '@/components/StateContext';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Categories from '@/components/Categories';
import Image from 'next/image';
import ProductList from '@/components/ProductList';

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string
}

type FetchProducts = {
  products: Item[];
  total: number;
  skip: number;
  limit: number;
};


export default function Category() {
  const { sharedState, setSharedState } = useStateContext();

	const initialProducts: FetchProducts = {
		products: [],
		total: 0,
		skip: 0,
		limit: 0,
	};
	const [products, setProducts] = useState<FetchProducts>(initialProducts);

  const router = useRouter();
  const { categoryId } = router.query;
	const page = Number(router.query.page) ?? 0

	async function fetchData(categoryId?: string, page?: number) {
		const url = `https://dummyjson.com/products/category${categoryId !== 'all' ? `/${categoryId}` : ''}${Number(page) ? `?skip=${Number(page) * 30}` : `?skip=0`}&limit=0`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	}

  useEffect(() => {
    const fetchProductDetail = async (categoryId?: string, page?: number) => {
      const data = await fetchData(categoryId, page);
      setProducts(data);
    };

		fetchProductDetail(sharedState.selectcategorie, Number(page));
  }, [categoryId, sharedState.selectcategorie, page]);


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
									<ProductList data={products} />
								</div>
							
							</div>
						</div>

					</div>





				</div>
			</Layout>
		</div>
	);
}
