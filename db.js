const banner = require("./server/banners/banner.js");
const catagory = require('./server/categories/categories.js');
const products = require('./server/products/products.js');
const cart = require('./server/addToCart/addtocart.js');
module.exports = () => ({
    banner,
    catagory,
    products,
    cart
});