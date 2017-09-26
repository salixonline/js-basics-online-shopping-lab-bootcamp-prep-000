var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 /*item = {
   item
 };*/
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push( { [item]: price } );
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var msg = [];
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])[0];
      var price = cart[i][key];
      if (i === cart.length - 2) {
        // msg += " and ";
        msg.push(`and ${key} at $${price}`);
      } else {
        msg.push(`${key} at $${price}`);
      }
    }
    if (cart.length === 2) {
      console.log(`In your cart, you have ${msg.join(" ")}.`);
    } else {
      console.log(`In your cart, you have ${msg.join(", ")}.`);
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
addToCart("mango");
addToCart("nuts");
viewCart();
setCart([]);
addToCart("orange");
addToCart("pear");
addToCart("quince");
viewCart();
