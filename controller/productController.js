const expressAsyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const slugify = require('slugify');
const Product = require("../models/productModel");


const createProduct = expressAsyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const newProduct = await Product.create(req.body);
        res.json({
            newProduct
        })
    } catch (error) {
        throw new Error(error);
    }
})

const getProduct = expressAsyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        res.json({ product });
    } catch (error) {
        throw new Error(error);
    }
})

const getAllProduct = expressAsyncHandler(async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ products });
    } catch (error) {
        throw new Error(error);
    }
})

const updateProduct = expressAsyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json({
            updateProduct
        })
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = {
    createProduct,
    getProduct,
    getAllProduct,
    updateProduct
}