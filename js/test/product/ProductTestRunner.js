class ProductTestRunner {
    // Runs all tests for the Product class
    runTests() {
      new ProductConstructorTest().test();
    }
}

// Run all tests for the Product class when this file is imported
const productTestRunner = new ProductTestRunner();
productTestRunner.runTests();
  