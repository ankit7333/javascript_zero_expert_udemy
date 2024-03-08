//Exporting Module
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

export const addTocart = function(product, qty){
    cart.push({product, qty});
    console.log(`${product} ${qty} is added to cart`);
}

const totalPrice = 242;
const totalQty = 8;

export {totalPrice, totalQty as tq};

export default function(product, qty){
    cart.push({product, qty});
    console.log(`${product} ${qty} is added to cart`);
}