import { useEffect } from 'react';
import { useStateContext } from '@/components/StateContext';
import Layout from '@/components/Layout';
import Categories from '@/components/Categories';
import MyCart from '@/components/MyCart';

export default function Payment() {
	const { sharedState } = useStateContext();

	useEffect(() => {
	}, [sharedState]);

	return (
		<div>
			<Layout>
				<h1>Payment</h1>
				<div className="content">
					<div className="shopping">
						<div className="container app-center">
							<div className="row">
								<div className="col-sm">
									<Categories />
								</div>

								<div className="col-sm">
									<MyCart />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}
