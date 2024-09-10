const searchInput = '#autocomplete-0-input';
const title = '.page-title'

class SearchPage {

  static searchProduct(searchTerm) {
    cy.get(searchInput).type(`${searchTerm}{enter}`);
    cy.get(title).should('contain', searchTerm);
  }
  
}

export default SearchPage;
