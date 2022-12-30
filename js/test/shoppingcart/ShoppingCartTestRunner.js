class ShoppingCartTestRunner {
    // Runs all tests for the ShoppingCart class
    runTests() {
      new ShoppingCartConstructorTest().test();
      new ShoppingCartAddProductTest().test();
      new ShoppingCartRemoveProductTest().test();
      new ShoppingCartCalculateTotalCostTest().test();
    }
  }
  
  // Run all tests for the ShoppingCart class when this file is imported
  const shoppingCartTestRunner = new ShoppingCartTestRunner();
  shoppingCartTestRunner.runTests();
  