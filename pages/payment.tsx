import { useEffect, useState } from 'react';
import { useStateContext } from '@/components/StateContext';
import Layout from '@/components/Layout';
import Categories from '@/components/Categories';
import MyCart from '@/components/MyCart';
export default function payment() {
	const { sharedState, setSharedState } = useStateContext();	

  useEffect(() => {
    // setSession(sharedState.message);
  }, [sharedState]);

  return (
		<div>
			<Layout>
				<h1>Payment</h1>
				<div className="content">
					{/* <Cart cart={cart} removeFromCart={removeFromCart} /> */}

					<div className="shopping">

						<div className="container app-center">
							<div className="row">

								<div className="col-sm">
									<Categories />
								</div>
								
								<div className="col-sm">
									<MyCart />
									{/* <ProductList data={products}/> */}
									{/* <Pagination total={products.total}/> */}
								</div>
							
							</div>
						</div>

					</div>





				</div>
			</Layout>
		</div>
  );
}
