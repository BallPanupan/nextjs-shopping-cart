import Image from "next/image";
import { memo, Fragment } from "react";

interface Product {
	id: number;
	name: string;
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

const ItemProduct = memo(({ item }: ProductProps) => (
	<Fragment>
		<div className='item-product'>
			<div className="item-detail">
				<Image
					src={item.image}
					alt={item.description}
					width={300}
					height={200}
					loading="lazy"
				/>
				<span>{item.name}</span>
				<p>{item.description}</p>
				<p>{item.price}</p>
				<p>rating: {item.rating}</p>
				<p>stock: {item.stock}</p>
				<p>brand: {item.brand}</p>
				<p>category: {item.category}</p>
			</div>
			<button>Add to cart</button>
		</div>
	</Fragment>
));

export default ItemProduct;
