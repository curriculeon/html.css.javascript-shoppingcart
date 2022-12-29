class ShoppingCartCalculateTotalCostTest {
  // Tests the calculateTotalCost method of the ShoppingCart class with different values
  testCalculateTotalCost() {
    this.testEmptyShoppingCart();
    this.testNonEmptyShoppingCart();
    this.testShoppingCartWithDiscounts();
  }

  // Test 1: Verify that the total cost is 0 for an empty shopping cart
  testEmptyShoppingCart() {
    const cart = new ShoppingCart();
    test(0, () => cart.calculateTotalCost());
  }

  // Test 2: Verify that the total cost is correct for a non-empty shopping cart
  testNonEmptyShoppingCart() {
    const cart = new ShoppingCart();
    const product1 = new Product(1, "Product 1", 10, 5);
    const product2 = new Product(2, "Product 2", 20, 10);
    cart.addProduct(product1);
    cart.addProduct(product2);
    test(50, () => cart.calculateTotalCost());
  }

  // Test 3: Verify that the total cost is correct for a shopping cart with discounts
  testShoppingCartWithDiscounts() {
    const cart = new ShoppingCart();
    const product1 = new Product(1, "Product 1", 10, 5);
    const product2 = new Product(2, "Product 2", 20, 10);
    const product3 = new Product(3, "Product 3", 30, 15);
    cart.addProduct(product1);
    cart.addProduct(product2);
    cart.addProduct(product3);
    cart.addDiscount(new Discount(20, DiscountType.PERCENTAGE));
    cart.addDiscount(new Discount(10, DiscountType.FLAT));
    test(70, () => cart.calculateTotalCost());
  }
}
