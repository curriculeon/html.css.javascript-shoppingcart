class CheckoutTestRunner {
  // Runs all tests for the Checkout class
  runTests() {
    new CheckoutGenerateInvoiceTest().testGenerateInvoice();
    new CheckoutApplyDiscountsTest().testApplyDiscounts();
  }
}

const checkoutTestRunner = new CheckoutTestRunner();
checkoutTestRunner.runTests();
