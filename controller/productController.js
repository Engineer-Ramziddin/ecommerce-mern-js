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
        const product = await Product.findById(id);
        if (product) {
            res.json({ product });
        } else {
            res.json({ msg: "Product not found" });

        }
    } catch (error) {
        throw new Error(error);
    }
})

const getAllProduct = expressAsyncHandler(async (req, res) => {
    try {
         // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This Page does not exists");
    }
    const product = await query;
    const totalCount = product.length;
    res.json({totalCount, product});
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

const deleteProduct = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (deletedProduct) {
            res.json({
                msg: "Product muofaqqiyatli o'chirildi",
                deletedProduct: deletedProduct
            })
        }
    } catch (error) {
        throw new Error(error);

    }
})

module.exports = {
    createProduct,
    getProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}