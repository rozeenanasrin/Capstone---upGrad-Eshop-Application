import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use react-router for navigation
import { Card, IconButton, Dialog, Button, TextField } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch and display all products
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        // Handle the error
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleDeleteIconClick = (product) => {
    setSelectedProduct(product);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Make an API request to delete the selected product
    // Display success message
    setSuccessMessage(`Product ${selectedProduct.name} deleted successfully`);
    setDeleteDialogOpen(false);
    // Update the products list
    const updatedProducts = products.filter((product) => product.id !== selectedProduct.id);
    setProducts(updatedProducts);
  };

  

  return (
    <div className="admin-dashboard">
      <Link to="/admin/add-product" className="add-product-link">Add Product</Link>
      {products.map((product) => (
        <Card key={product.id}>
          <h3>{product.name}</h3>
          <IconButton onClick={() => handleDeleteIconClick(product)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => handleEditIconClick(product)}>
            <EditIcon />
          </IconButton>
        </Card>
      ))}

      
      <Dialog open={isDeleteDialogOpen}>
        <div className="delete-dialog">
          <p>Confirm deletion of {selectedProduct ? selectedProduct.name : ''}?</p>
          <Button onClick={handleConfirmDelete}>Confirm</Button>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
        </div>
      </Dialog>

      
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default AdminDashboard;
