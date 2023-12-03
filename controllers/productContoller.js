import Product from '../models/productModel.js';


// Create Product (req(fetch data) -> Process on Data -> Return output)
export const createProduct = async (req, res, next) => {
    const data = req.body;

    if (!data) {
        res.status(400).json({
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
export const getAllProducts = (req, res) => {
    
    res.status(200).json({message: "Route is working"})
}