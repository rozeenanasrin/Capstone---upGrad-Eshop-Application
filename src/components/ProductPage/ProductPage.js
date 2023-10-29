
import React, { useState, useEffect } from 'react';
import { Card, ToggleButton, ToggleButtonGroup } from '@material-ui/core';
import './ProductsPage.css';

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [sortingOption, setSortingOption] = useState('default');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product categories
    fetch('http://localhost:3000/api/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        // Handle the error
        console.error('Error fetching product categories:', error);
      });


    const productsEndpoint = `/products?sort=${sortingOption}`;
    fetch(`http://localhost:3000/api${productsEndpoint}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        // Handle the error
        console.error('Error fetching products:', error);
      });
  }, [sortingOption]);

  return (
    <div className="product-page">
      <div className="category-tabs">
        <ToggleButtonGroup value={sortingOption} exclusive onChange={(event, newValue) => setSortingOption(newValue)}>
          {categories.map((category) => (
            <ToggleButton className="category-button" key={category.id} value={category.id}>
              {category.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

<div className="product-list">
      {products.map((product) => (
        <Card className="product-card" key={product.id}>
          {/* Display product details */}
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          {/* Add more product details as needed */}
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
