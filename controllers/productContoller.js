import Product from '../models/productModel.js';
import ErrorHandler from '../utils/errorHandler.js';


// Create Product - admin (req(fetch data) -> Process on Data -> Return output)
export const createProduct = async (req, res, next) => {
    const data = req.body;

    if (!data) {
        return next(new ErrorHandler("Product not found", 404))
    }

    const product = await Product.create(data);

    product.save();

    res.status(201).json({
        success: true,
        message: "Product Created Successfully",
        product
    })
}

// Get all Products
export const getAllProducts = async (req, res) => {

    const products = await Product.find();
    
    res.status(200).json({
        success: true,
        message: "Product Fetched Successfully",
        products
    })
}

// Get Single Product
export const getSingleProduct = async (req, res, next) => {
    const {id} = req.params;

    const product = await Product.findById(id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        message: "Product Fetched Successfully",
        product
    })
}

// update product
export const updateProduct = async (req, res, next) => {
    const {id} = req.params;   // log id
    const data = req.body;

    let product = await Product.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
        }
    );

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
        product
    })
}

// Delete Product
export const deleteProduct = async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        return next(new ErrorHandler("Product not found"))
    }

    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
}