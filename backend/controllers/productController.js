const Product = require('../models/products');

exports.newProduct = async (req, res, next) => {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: newProduct
    })
}

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products in the database"
    })

}