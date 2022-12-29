class ShoppingCartRemoveProductTest {
  // Tests the removeProduct method of the ShoppingCart class with different values
  testRemoveProduct() {
    this.testRemoveProductFromEmptyCart();
    this.testRemoveProductFromNonEmptyCart();
    this.testRemoveProductThatDoesNotExist();
  }

  // Test 1: Verify that an error is thrown when removing a product from an empty shopping cart
  testRemoveProductFromEmptyCart() {
    const cart = new ShoppingCart();
    let errorThrown = false;
    try {
      cart.removeProduct(1);
    } catch (error) {
      errorThrown = true;
    }
    test(true, () => errorThrown);
  }

  // Test 2: Verify that a product can be removed from a non-empty shopping cart
  testRemoveProductFromNonEmptyCart() {
    const cart = new ShoppingCart();
    const product1 = new Product(1, "Product 1", 10, 5);
    const product2 = new Product(2, "Product 2", 20, 10);
    cart.addProduct(product1);
    cart.addProduct(product2);
    cart.removeProduct(1);
    test([product2], () => cart.products);
  }

  // Test 3: Verify that an error is thrown when removing a product that does not exist in the shopping cart
  testRemoveProductThatDoesNotExist() {
    const cart = new ShoppingCart();
    const product1 = new Product(1, "Product 1", 10, 5);
    const product2 = new Product(2, "Product 2", 20, 10);
    cart.addProduct(product1);
    cart.addProduct(product2);
    let errorThrown = false;
    try {
      cart.removeProduct(3);
    } catch (error) {
      errorThrown = true;
    }
    test(true, () => errorThrown);
  }
}
