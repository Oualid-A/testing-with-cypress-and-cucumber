const productDetailsClass = '.product-item-details';
const addToCartButton = '.action';
const confirmationPopup = '#confirmBox';
const minicartBlock = '[data-block="minicart"]';
const minicartItemsWrapper = ".minicart-items-wrapper";
const productNameClass = ".product-item-name";
const quantityInputClass = ".details-qty .item-qty";
const removeButtonClass = ".secondary";
const modalInnerWrap = '.modal-inner-wrap';
const confirmButton = 'button:contains("Valider")';
const url ='https://www.marjanemall.ma/';

class ProductPage {

  static visitProductPage() {
    cy.visit(url);
  }

  static addProductToCart(productName) {
    cy.contains(productName).parents(productDetailsClass).within(() => {
      cy.get(addToCartButton).click();
    });
    cy.get(confirmationPopup).should("be.visible");
    cy.wait(6000);
  }

  static checkProductInCart(productName, quantity) {
    cy.get(minicartBlock).click();
    cy.get(minicartItemsWrapper).within(() => {
      cy.get(productNameClass).should("contain", productName);
      cy.get(quantityInputClass).invoke("val").should("eq", quantity.toString());
    });
  }

  static removeProductFromCart(productName) {
    cy.get(minicartItemsWrapper).within(() => {
      cy.get(productNameClass).should("contain", productName);
      cy.get(removeButtonClass).first().click();
    });
    cy.get(modalInnerWrap).should('be.visible');
    cy.get(confirmButton).click();
  }

  static checkCartLength(expectedLength) {
    cy.get(minicartItemsWrapper).should("have.length", expectedLength);
  }
}

export default ProductPage;
