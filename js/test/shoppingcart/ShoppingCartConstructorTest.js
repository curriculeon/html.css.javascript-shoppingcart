class ShoppingCartConstructorTest {
    // Tests the constructor of the ShoppingCart class with different values
    testConstructor() {
      this.testConstructorWithDefaultValues();
      this.testConstructorWithDifferentValues();
      this.testConstructorWithStringValues();
    }
  
    // Test 1: Verify that the shopping cart properties are set correctly with default values
    testConstructorWithDefaultValues() {
      const cart = new ShoppingCart();
      test(0, () => cart.id);
      test("", () => cart.customerName);
      test([], () => cart.products);
    }
  
    // Test 2: Verify that the shopping cart properties are set correctly with different values
    testConstructorWithDifferentValues() {
      const cart = new ShoppingCart(1, "Customer 1", [new Product(1, "Product 1", 10, 5)]);
      test(1, () => cart.id);
      test("Customer 1", () => cart.customerName);
      test([new Product(1, "Product 1", 10, 5)], () => cart.products);
    }
  
    // Test 3: Verify that the shopping cart properties are set correctly with string values
    testConstructorWithStringValues() {
      const cart = new ShoppingCart("1", "Customer 1", [new Product("1", "Product 1", "10", "5")]);
      test(1, () => cart.id);
      test("Customer 1", () => cart.customerName);
      test([new Product(1, "Product 1", 10, 5)], () => cart.products);
    }
  }
  