class ProductConstructorTest {
  // Tests the constructor of the Product class with different values
  testConstructor() {
    this.testConstructorWithDefaultValues();
    this.testConstructorWithDifferentValues();
    this.testConstructorWithStringValues();
  }

  // Test 1: Verify that the product properties are set correctly with default values
  testConstructorWithDefaultValues() {
    const product = new Product();
    test(0, () => product.id);
    test("", () => product.name);
    test(0, () => product.price);
    test(0, () => product.quantity);
  }

  // Test 2: Verify that the product properties are set correctly with different values
  testConstructorWithDifferentValues() {
    const product = new Product(1, "Product 1", 10, 5);
    test(1, () => product.id);
    test("Product 1", () => product.name);
    test(10, () => product.price);
    test(5, () => product.quantity);
  }

  // Test 3: Verify that the product properties are set correctly with string values
  testConstructorWithStringValues() {
    const product = new Product("1", "Product 1", "10", "5");
    test(1, () => product.id);
    test("Product 1", () => product.name);
    test(10, () => product.price);
    test(5, () => product.quantity);
  }
}
