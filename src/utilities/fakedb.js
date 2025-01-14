// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  } else {
    // const newQuantity = quantity + 1;
    // shoppingCart[id] = newQuantity;
    alert('Already Applied');
  }
};
const checkStatus = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    return true;
  } else return false;
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart');
};

export {
  addToDb,
  removeFromDb,
  getShoppingCart,
  deleteShoppingCart,
  checkStatus,
};
