import { useStateContext } from "./StateContext";
import { useEffect, useState } from "react";
import ItemMyCart from "./ItemMyCart";

const MyCart = () => {

	const { sharedState, setSharedState } = useStateContext();
	const [carts, setCarts] = useState<any>()

	const totalQty: number = (sharedState.cart ?? []).reduce((acc, item) => acc + item.qty, 0);
	const total: number = (sharedState.cart ?? []).reduce((acc, item) => acc + item.price, 0);


	useEffect(() => {
		setCarts(sharedState.cart)
	}, [sharedState.cart, carts])

	return (
		<div className="MyCart">
			{
				carts?.map((data: any, index: number) => {
					return (<ItemMyCart key={index} index={index} data={data} />)
				}) || ''
			}

			<div className="summary">
				<p>qty: {totalQty}</p>
				<p>total: {total}</p>
			</div>


		</div>
	);
};

export default MyCart;
