import Link from "next/link";
import { useEffect, useState } from "react";
import { useStateContext } from "./StateContext";

async function fetchData() {
	const res = await fetch('https://dummyjson.com/products/categories');
	const categories: string[] = await res.json();
	return categories
}

const Categories = ({ children }: any) => {
	const { sharedState, setSharedState } = useStateContext();
	const [categories, setCategories] = useState<string[]>([]);
	const [selectcategorie, setSelectcategorie] = useState<string>('');

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await fetchData();
			setCategories(["all", ...data]);
		};
		fetchCategories();
	}, []);

	const selectCategorie = (data: string): void => {
		setSelectcategorie(data);
		setSharedState({ selectcategorie: data })
	}
	return (
		<div>
			<div className="list-categories">
				{
					categories.map((data, index) => (
						<Link 
							key={index} 
							href={`${data !== 'all'? `/Category/${data}` : '/'}`} 
							onClick={() => selectCategorie(data)}
						>{data}</Link>
					))
				}
			</div>
		</div>
	);
};

export default Categories;
