// ProductsPage.js
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
      });

    // Fetch and display products based on the selected sorting option
    const productsEndpoint = `/products?sort=${sortingOption}`;
    fetch(`http://localhost:3000/api${productsEndpoint}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        // Handle the error
      });
  }, [sortingOption]);

  return (
    <div>
      {/* Category tabs */}
      <ToggleButtonGroup value={sortingOption} exclusive onChange={(event, newValue) => setSortingOption(newValue)}>
        {/* Map categories to ToggleButton components */}
      </ToggleButtonGroup>

      {/* Product list */}
      {products.map((product) => (
        <Card key={product.id}>
          {/* Display product details */}
        </Card>
      )}
    </div>
  );
};

export default ProductsPage;
