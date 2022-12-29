class ShoppingCartTestRunner {
    // Runs all tests for the ShoppingCart class
    runTests() {
      new ShoppingCartConstructorTest().testConstructor();
      new ShoppingCartAddProductTest().testAddProduct();
      new ShoppingCartRemoveProductTest().testRemoveProduct();
      new ShoppingCartCalculateTotalCostTest().testCalculateTotalCost();
    }
  }
  
  // Run all tests for the ShoppingCart class when this file is imported
  const shoppingCartTestRunner = new ShoppingCartTestRunner();
  shoppingCartTestRunner.runTests();
  