class CheckoutApplyDiscountsTest {
    // Tests the applyDiscounts method of the Checkout class with different values
    test() {
      this.testEmptyDiscountList();
      this.testDiscountListWithPercentageDiscounts();
      this.testDiscountListWithFlatDiscounts();
    }
  
    // Test 1: Verify that applying an empty list of discounts does not affect the total cost
    testEmptyDiscountList() {
      const cart = new ShoppingCart();
      const product1 = new Product(1, "Product 1", 10, 5);
      const product2 = new Product(2, "Product 2", 20, 10);
      cart.addProduct(product1);
      cart.addProduct(product2);
      const checkout = new Checkout(cart);
      checkout.applyDiscounts([]);
      test(50, checkout, checkout.applyDiscounts, []);
    }
  
    // Test 2: Verify that applying a list of percentage discounts correctly reduces the total cost
    testDiscountListWithPercentageDiscounts() {
      const cart = new ShoppingCart();
      const product1 = new Product(1, "Product 1", 10, 5);
      const product2 = new Product(2, "Product 2", 20, 10);
      const product3 = new Product(3, "Product 3", 30, 15);
      cart.addProduct(product1);
      cart.addProduct(product2);
      cart.addProduct(product3);
      const checkout = new Checkout(cart);
      test(50, checkout, checkout.applyDiscounts, [new Discount(20, DiscountType.PERCENTAGE)]);
    }
  
    // Test 3: Verify that applying a list of flat discounts correctly reduces the total cost
    testDiscountListWithFlatDiscounts() {
      const cart = new ShoppingCart();
      const product1 = new Product(1, "Product 1", 10, 5);
      const product2 = new Product(2, "Product 2", 20, 10);
      const product3 = new Product(3, "Product 3", 30, 15);
      cart.addProduct(product1);
      cart.addProduct(product2);
      cart.addProduct(product3);
      const checkout = new Checkout(cart);
      checkout.applyDiscounts([new Discount(10, DiscountType.FLAT), new Discount(5, DiscountType.FLAT)]);
      test(50, checkout, checkout.applyDiscounts, [new Discount(10, DiscountType.FLAT), new Discount(5, DiscountType.FLAT)]);
    }
  }