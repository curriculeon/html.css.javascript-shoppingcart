class CheckoutTestRunner {
  // Runs all tests for the Checkout class
  runTests() {
    new CheckoutConstructorTest().test()
    new CheckoutGenerateInvoiceTest().test();
    new CheckoutApplyDiscountsTest().test();
  }
}

const checkoutTestRunner = new CheckoutTestRunner();
checkoutTestRunner.runTests();
