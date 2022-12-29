class ShoppingCartAddProductTest {
    // Tests the addProduct method of the ShoppingCart class with different values
    testAddProduct() {
      this.testAddProductToEmptyCart();
      this.testAddProductToNonEmptyCart();
      this.testAddProductToFullCart();
    }
  
    // Test 1: Verify that a product can be added to an empty shopping cart
    testAddProductToEmptyCart() {
      const cart = new ShoppingCart();
      const product = new Product(1, "Product 1", 10, 5);
      cart.addProduct(product);
      test([product], () => cart.products);
    }
  
    // Test 2: Verify that a product can be added to a non-empty shopping cart
    testAddProductToNonEmptyCart() {
      const cart = new ShoppingCart();
      const product1 = new Product(1, "Product 1", 10, 5);
      const product2 = new Product(2, "Product 2", 20, 10);
      cart.addProduct(product1);
      cart.addProduct(product2);
      test([product1, product2], () => cart.products);
    }
  
    // Test 3: Verify that an error is thrown when adding a product to a full shopping cart
    testAddProductToFullCart() {
      const cart = new ShoppingCart();
      const product1 = new Product(1, "Product 1", 10, 5);
      const product2 = new Product(2, "Product 2", 20, 10);
      const product3 = new Product(3, "Product 3", 30, 15);
      cart.addProduct(product1);
      cart.addProduct(product2);
      let errorThrown = false;
      try {
        cart.addProduct(product3);
      } catch (error) {
        errorThrown = true;
      }
      test(true, () => errorThrown);
    }
  }
  