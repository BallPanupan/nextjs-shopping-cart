import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
// import Cart from '../components/Cart';
import { Product } from '../types';
import Categories from '@/components/Categories';
import { useStateContext } from '@/components/StateContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Pagination from '@/components/Pagination';
import OnCart from '@/components/OnCart';
import PaymentBtn from '@/components/PaymentBtn';

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

export default function Home() {

	const initialProducts: FetchProducts = {
		products: [],
		total: 0,
		skip: 0,
		limit: 0,
	};

	const { sharedState, setSharedState } = useStateContext();	
	const [selectCategorie, setSelectCategorie] = useState<string | undefined>('');
	const [products, setProducts] = useState<FetchProducts>(initialProducts);
  const router = useRouter();
	const page = Number(router.query.page) ?? 0

	const fetchData = useCallback(async (page?: number) => {
		const url = `https://dummyjson.com/products${Number(page) ? `?skip=${Math.min((Number(page) - 1) * 30, products.total)}` : `?skip=0`}&limit=30`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	}, [products.total]);

	useEffect(() => {
		const fetchProductDetail = async (page?: number) => {
			const data = await fetchData(page || 0);
			setProducts(data);
		};
	
		fetchProductDetail(Number(page));
		setSelectCategorie(sharedState.selectcategorie);
	
	}, [page, sharedState.selectcategorie, fetchData]);
	

	return (
		<div>
			<Layout>
				<Head>
					<title>Next.js Shopping Cart</title>
					<meta name="description" content="Next.js Shopping Cart" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="content">
					<div className="shopping">
						<div className="container app-center">
							<div className="row">
								<div className="col-sm">
									<Categories />
								</div>
								<div className="col-sm">
									<ProductList data={products}/>
									<Pagination total={products.total}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
