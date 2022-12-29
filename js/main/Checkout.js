class Checkout {
    constructor(shoppingCart) {
      // The shopping cart being checked out
      this.shoppingCart = shoppingCart;
    }
  
    // Applies any discounts or promotions to the shopping cart
    // @return {number} - The amount of the discount or promotion
    applyDiscounts() {}
  
     // @return {Object} - The invoice object containing the total cost, discount, and final cost
    generateInvoice() {}
}  