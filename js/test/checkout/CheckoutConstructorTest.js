class CheckoutConstructorTest {
  // Test 1: Verify that the checkout object is created correctly with a shopping cart with no products
  test() {
    const cart = new ShoppingCart();
    const func = () => new Checkout(cart);
    const expectedOutput = {
      shoppingCart: cart,
      discounts: [],
      totalDiscount: 0,
    };
    testFunction(expectedOutput, func);
  }

  // Test 2: Verify that the checkout object is created correctly with a shopping cart with multiple products
  testConstructorWithMultipleProducts() {
    const cart = new ShoppingCart();
    const product1 = new Product(1, "Product 1", 10, 5);
    const product2 = new Product(2, "Product 2", 20, 10);
    cart.addProduct(product1);
    cart.addProduct(product2);
    const func = () => new Checkout(cart);
    const expectedOutput = {
      shoppingCart: cart,
      discounts: [],
      totalDiscount: 0,
    };
    testFunction(expectedOutput, func);
  }

  // Test 3: Verify that an error is thrown if no shopping cart is provided
  testConstructorWithNoCart() {
    let errorThrown = false;
    try {
      const checkout = new Checkout();
    } catch (error) {
      errorThrown = true;
    }
    testFunction(true, () => errorThrown);
  }
}
