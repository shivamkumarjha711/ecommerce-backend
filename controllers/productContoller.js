import Product from '../models/productModel.js';


// Create Product - admin (req(fetch data) -> Process on Data -> Return output)
export const createProduct = async (req, res, next) => {
    const data = req.body;

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "Product data not found"
        })
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
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
        product
    })
}