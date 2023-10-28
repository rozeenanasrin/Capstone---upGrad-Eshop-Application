
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS file

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details for the given ID
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        // Handle the error
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  return (
    <div className="product-details">
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.name} />
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
