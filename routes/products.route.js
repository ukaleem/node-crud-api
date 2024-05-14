const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');
const productRoutes = express.Router();

// Get All Products
productRoutes.get("/", getAllProducts);
// Get product by id
productRoutes.get("/:id", getProductById);
// Add new product
productRoutes.post("/", createProduct);
// Update a product
productRoutes.put("/:id", updateProduct);
// Delete a product
productRoutes.delete("/:id", deleteProduct);


module.exports = productRoutes