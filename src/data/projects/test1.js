const products = [
  {
    name: "Laptop",
    price: 900,
    quantity: 1,
    inStock: true
  },
  {
    name: "Mouse",
    price: 40,
    quantity: 2,
    inStock: true
  },
  {
    name: "Keyboard",
    price: 80,
    quantity: 1,
    inStock: false
  },
  {
    name: "Monitor",
    price: 300,
    quantity: 2,
    inStock: true
  },
  {
    name: "Headphones",
    price: 120,
    quantity: 1,
    inStock: true
  }
];


// 1. Show product names

const showProductNames = () => {
  products.forEach(product => {
    console.log(product.name);
  });
};

showProductNames();


// 2. Find product by name

const findProductByName = (name) => {
  return products.find(p => p.name === name);
};

console.log(findProductByName("Mouse"));


// 3. Get all products in stock

const getProductsInStock = () => {
  return products.filter(p => p.inStock);
};

console.log(getProductsInStock());


// 4. Check if every product is in stock

const isEveryProductInStock = () => {
  return products.every(p => p.inStock);
};

console.log(isEveryProductInStock());


// 5. Check if any product costs more than £500

const productCostOver500 = () => {
  return products.some(p => p.price > 500);
};

console.log(productCostOver500());


// 6. Check if every product has quantity greater than 0

const productQuantityGreater0 = () => {
  return products.every(p => p.quantity > 0);
};

console.log(productQuantityGreater0());


// 7. Calculate total cart price

const totalPrice = () => {
  return products.reduce(
    (total, p) => total + p.quantity * p.price,
    0
  );
};

console.log(totalPrice());


// 8. Print product name and price

const printProduct = () => {
  products.forEach(p => {
    console.log(`${p.name}: £${p.price}`);
  });
};

printProduct();


// 9. Create new array with 10% discount

const productDiscount = () => {
  return products.map(p => {
    return {
      ...p,
      price: p.price * 0.9
    };
  });
};

console.log(productDiscount());