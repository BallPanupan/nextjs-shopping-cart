import { useEffect, useState } from "react";
import { useStateContext } from "./StateContext";

const OnCart = () => {
	const { sharedState, setSharedState } = useStateContext();
	const [totalCart, setTotalCart] = useState<number>()
	const [total, setTotal] = useState<number>()

	useEffect(() => {
		const totalQty: number = (sharedState.cart ?? []).reduce((acc, item) => acc + item.qty, 0);
		const total: number = (sharedState.cart ?? []).reduce((acc, item) => acc + item.price, 0);
		setTotalCart(totalQty);
		setTotal(total)

	}, [sharedState.cart])

	const clearCart = (): void => {
		setSharedState({
			selectcategorie: sharedState.selectcategorie,
			cart: []
		});
	}

	return (
		<div className="OnCart">
			<div>Cart: {totalCart || 0}</div>
			<div>total: {total || 0}</div>
			<button onClick={() => clearCart()}>clear cart</button>
		</div>
	);
};

export default OnCart;
