const category = ".category-slider-title"

class CategoryPage {

  static selectCategory(categoryName) {
    cy.get(category).contains(categoryName).click();
  }

  static checkNavigation(url) {
    cy.location("pathname").should("eq", url);
  }
}

export default CategoryPage;
