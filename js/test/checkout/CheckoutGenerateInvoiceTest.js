class CheckoutGenerateInvoiceTest {
    // Tests the generateInvoice method of the Checkout class with different values
    test() {
      this.testInvoiceWithEmptyShoppingCart();
      this.testInvoiceWithNonEmptyShoppingCart();
      this.testInvoiceWithDiscounts();
    }
  
    // Test 1: Verify that the invoice is correct for an empty shopping cart
    testInvoiceWithEmptyShoppingCart() {
      const cart = new ShoppingCart();
      const checkout = new Checkout(cart);
      const expectedOutput = "Invoice for Shopping Cart:\nTotal Cost: 0";
      test(expectedOutput, () => checkout.generateInvoice());
    }
  
    // Test 2: Verify that the invoice is correct for a non-empty shopping cart
    testInvoiceWithNonEmptyShoppingCart() {
      const cart = new ShoppingCart();
      const product1 = new Product(1, "Product 1", 10, 5);
      const product2 = new Product(2, "Product 2", 20, 10);
      cart.addProduct(product1);
      cart.addProduct(product2);
      const checkout = new Checkout(cart);
      const expectedOutput = "Invoice for Shopping Cart:\nProduct 1: $10\nProduct 2: $20\nTotal Cost: $30";
      test(expectedOutput, () => checkout.generateInvoice());
    }
  
    // Test 3: Verify the generateInvoice method with a shopping cart that has discounts applied.
    testInvoiceWithDiscounts() {
        const checkout = new Checkout([
          {name: "apple", price: 0.5},
          {name: "banana", price: 0.25},
          {name: "orange", price: 0.75},
          {name: "pear", price: 0.5},
        ], [
          {minTotal: 3, discount: 0.1},
          {minTotal: 5, discount: 0.25},
        ]);
        const shoppingCart = new ShoppingCart();
        shoppingCart.addProduct(new Product("apple", 0.5));
        shoppingCart.addProduct(new Product("banana", 0.25));
        shoppingCart.addProduct(new Product("orange", 0.75));
        shoppingCart.addProduct(new Product("pear", 0.5));
        checkout.applyDiscounts(shoppingCart);
        const expectedOutput = {
          items: [
            {name: "apple", price: 0.5},
            {name: "banana", price: 0.25},
            {name: "orange", price: 0.75},
            {name: "pear", price: 0.5},
          ],
          subtotal: 2.25,
          discounts: [
            {minTotal: 3, discount: 0.1},
            {minTotal: 5, discount: 0.25},
          ],
          total: 1.93,
        };
        test(expectedOutput, checkout.generateInvoice, shoppingCart);
      }      
}  