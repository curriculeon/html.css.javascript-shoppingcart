class ProductTestRunner {
    // Runs all tests for the Product class
    runTests() {
      new ProductConstructorTest().testConstructor();
    }
}

// Run all tests for the Product class when this file is imported
const productTestRunner = new ProductTestRunner();
productTestRunner.runTests();
  