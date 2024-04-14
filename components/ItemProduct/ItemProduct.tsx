import Image from "next/image";
import Link from "next/link";
import { memo, Fragment } from "react";
import { useStateContext } from "../StateContext";

interface Product {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
};

type ProductProps = {
	item: Product;
};


const ItemProduct = memo(({ item }: ProductProps) => {
	const { sharedState, setSharedState } = useStateContext();

	const addToCart = (item: any): void => {

		setSharedState({
			selectcategorie: sharedState?.selectcategorie || '',
			cart: [
				...sharedState.cart || [],
				{
					id: item.id,
					title: item.title,
					price: item.price,
					qty: 1,
				}
			],
		});
	};
	
	return (
		<Fragment>
			<div className='item-product'>
				<div className="item-detail">
					<Link 
						href={`/ProductDetail/${item.id}`} 
					>
						<Image
							src={item.image}
							alt={item.description}
							width={300}
							height={200}
							loading="lazy"
						/>
					</Link>
					<span>{item.title}</span>
					<p>{item.description}</p>
					<p>price: {item.price}</p>
					<p>rating: {item.rating}</p>
					<p>stock: {item.stock}</p>
					<p>brand: {item.brand}</p>
					<p>category: {item.category}</p>
				</div>
				<button onClick={()=> {addToCart(item)}}>Add to cart</button>
			</div>
		</Fragment>
	)
});

export default ItemProduct;
