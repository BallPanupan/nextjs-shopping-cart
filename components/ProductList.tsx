import React from 'react';
import { Product } from '../types';
import styles from '../styles/ProductList.module.css';

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductList = ({ products, addToCart }: ProductListProps) => (
  <div className={styles.productList}>
    {products.map((product) => (
      <div key={product.id} className={styles.product}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.details}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)} className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;
