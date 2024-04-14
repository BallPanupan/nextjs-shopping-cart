import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "./StateContext";
import { useEffect } from "react";

interface ItemMyCartProps {
	index: number;
	data: {
		id: number;
		title: string;
		price: number;
		qty: number;
		thumbnail: string;
	};
}

const ItemMyCart: React.FC<ItemMyCartProps> = ({ index, data }) => {
	const { sharedState, setSharedState } = useStateContext();
	
	useEffect(() => {
	}, [sharedState.cart]);

	const deleteItem = (): void => {
		setSharedState({
			selectcategorie: sharedState.selectcategorie,
			cart: [...(sharedState.cart ?? []).filter((_, i) => i !== index)]
		});
	};


	return (
		<div className="item-detail">
			<Link href={`/ProductDetail/1`}>
				<Image
					src={data.thumbnail}
					alt={'description'}
					width={300}
					height={200}
					loading="lazy"
				/>
			</Link>

			<div className="detail">
				<span>Name: {data.title}</span>
				<p>price: {data.price}</p>
			</div>

			<div>
				<p>{data.qty}</p>
			</div>

			<div>
				<button onClick={deleteItem}>delete</button>
			</div>
		</div>
	);
};

export default ItemMyCart;
