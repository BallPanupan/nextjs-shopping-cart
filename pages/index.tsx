import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
// import Cart from '../components/Cart';
import { Product } from '../types';
import Categories from '@/components/Categories';
import { useStateContext } from '@/components/StateContext';

export default function Home() {

	const { sharedState, setSharedState } = useStateContext();	
	const [selectCategorie, setSelectCategorie] = useState<string | undefined>('');

	const [cart, setCart] = useState<Product[]>([]);

	const addToCart = (product: Product) => {
		setCart([...cart, product]);
	};

	const removeFromCart = (productId: string) => {
		setCart(cart.filter((product) => product.id !== productId));
	};


	useEffect(()=>{
		setSelectCategorie(sharedState.message)
	}, [sharedState])


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
					<ProductList products={[]} addToCart={addToCart} />
					{/* <Cart cart={cart} removeFromCart={removeFromCart} /> */}


					<h2>Categorie: {selectCategorie || 'none'}</h2>


					<div className="shopping">

						<div className="container app-center">
							<div className="row">

								<div className="col-sm">
									<Categories />
								</div>
								
								<div className="col-sm">
									show list of Product
								</div>
								
								<div className="col-sm">
									One of three columns
								</div>
							
							
							</div>
						</div>

					</div>





				</div>
			</Layout>
		</div>
	);
}
