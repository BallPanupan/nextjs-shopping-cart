import Link from "next/link";

const PaymentBtn = () => {
	return (
		<div className="PaymentBtn">
			<Link href={'/payment'}><button>payment</button></Link>
		</div>
	);
};

export default PaymentBtn;
