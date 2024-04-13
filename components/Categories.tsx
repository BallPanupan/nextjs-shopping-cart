import Link from "next/link";
import { useState } from "react";
import { useStateContext } from "./StateContext";

const Categories = ({ children }: any) => {


	const { sharedState, setSharedState } = useStateContext();	

	const [selectcategorie, setSelectcategorie] = useState<string>('');

	const categories = [
		"smartphones",
		"laptops",
		"fragrances",
		"skincare",
		"groceries",
		"home-decoration",
		"furniture",
		"tops",
		"womens-dresses",
		"womens-shoes",
		"mens-shirts",
		"mens-shoes",
		"mens-watches",
		"womens-watches",
		"womens-bags",
		"womens-jewellery",
		"sunglasses",
		"automotive",
		"motorcycle",
		"lighting"
	]
	
	console.log('selectcategorie', selectcategorie)

	const selectCategorie = (data: string): void => {
		setSelectcategorie(data)
		setSharedState({message: data})
	}

	return (
		<div>
			<div className="list-categories">
				{
					categories.map((data, index) => (
						<Link key={index} href="" onClick={() => selectCategorie(data)}>{data}</Link>
					))
				}
			</div>
		</div>
	);
};

export default Categories;
