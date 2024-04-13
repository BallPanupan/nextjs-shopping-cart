import ItemProduct from './ItemProduct/ItemProduct';

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
  thumbnail: string;
};

type FetchProducts = {
  products: Item[];
};

const ProductList = ({ data }: { data: FetchProducts }) => {
  console.log('in ProductList: ', data);
  return (
    <div className="product-list">
      {data.products.map((item) => (
        <ItemProduct
          key={item.id}
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
      ))}
    </div>
  );
};

export default ProductList;
