const ProductModel = require('../models/products.model');

getAllProducts = async (req, res) => {
    try {
        console.log("im here");
        const products = await ProductModel.find();
        if (!products) {
            return res.status(404).json({ message: "Product not found try again!" });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(200).json({ message: error.message, "error": "true" })
    }
}

getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await ProductModel.findById(id);
        if (!products) {
            return res.status(404).json({ message: "Product not found try again!" });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(200).json({ message: error.message, "error": "true" })
    }
}

createProduct = async (req, res) => {
    console.log('api hit');
    try {
        const products = await ProductModel.create(req.body);
        if (!products) {
            return res.status(404).json({ message: "Product not created try again!" });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(200).json({ message: error.message, "error": "true" })
    }
}

updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await ProductModel.findByIdAndUpdate(id, req.body);
        if (!products) {
            return res.status(404).json({ message: "Product not found try again!" });
        }
        const updatedProduct = await ProductModel.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(200).json({ message: error.message, "error": "true" })
    }
}

deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const query = { id: `${id}` };
        const products = await ProductModel.findByIdAndDelete(id);
        if (!products) {
            return res.status(404).json({ message: "Product not Found try again!" });
        }
        const restProducts = await ProductModel.find();
        res.status(200).json({ "Deleted": products, "Other Products": restProducts });
    } catch (error) {
        res.status(200).json({ message: error.message, "error": "true" })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}