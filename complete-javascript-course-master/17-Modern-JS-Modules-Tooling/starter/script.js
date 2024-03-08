//Importing Module
import {addTocart, totalPrice as price, tq} from './shoppingCart.js';
addTocart('bread', 5);
console.log(price, tq);

console.log('Importing Module');
// console.log(shippingCost);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addTocart('bread', 5);
console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js'
add('pizza', 5);

//Top level await
console.log('Start Fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');

const getLastPost = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {title: data.at(-1).title, text: data.at(-1).body};
}

const lastPost = getLastPost();
console.log(lastPost);

const lastPost2 = await getLastPost();
console.log(lastPost2);

//module pattern
const shoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQty = 23;

    const addTocart = function(product, qty){
        cart.push({product, qty});
        console.log(`${qty} ${product} added to cart`);
    }

    const orderStock = function(product, qty){
        console.log(`${qty} ${product} ordered from supplier`);
    }

    return{
        addTocart,
        cart,
        totalPrice,
        totalQty,
    };
})();
shoppingCart2.addTocart('apple', 4);
shoppingCart2.addTocart('pizza', 2);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart:[
        {product: 'bread', qty: 5},
        {product: 'pizza', qty: 5}
    ],
    user:{ loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);


