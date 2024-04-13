import React, { useEffect, useState } from 'react';
import ItemProduct from './ItemProduct/ItemProduct';
import { useStateContext } from './StateContext';

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string
}

type FetchProducts = {
  products: Item[];
  total: number;
  skip: number;
  limit: number;
};

async function fetchData(categories?: string) {
  const byCategories = categories && categories !== 'all' ? `/category/${categories}` : ''
  const url = `https://dummyjson.com/products` + byCategories;
  const res = await fetch(url);
  const data: any = await res.json();
  return data || { products: [], total: 0, skip: 0, limit: 0 }
}

const ProductList = () => {
  const { sharedState, setSharedState } = useStateContext();
  const [items, setItems] = useState<FetchProducts>({ products: [], total: 0, skip: 0, limit: 0 });
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData(sharedState.selectcategorie);
      setItems(data);
    };
    fetchItems();
  }, [sharedState.selectcategorie]);

  return (
    <div className="product-list">
      {
        items.products.map((item, index) => (
          <ItemProduct
            key={index}
            item={{
              id: item.id,
              name: item.title,
              description: item.description,
              image: item.thumbnail,
              price: item.price,
              rating: item.rating,
              stock: item.stock,
              brand: item.brand,
              category: item.category,
            }}
          />
        ))
      }
    </div>
  );
};

export default ProductList;
