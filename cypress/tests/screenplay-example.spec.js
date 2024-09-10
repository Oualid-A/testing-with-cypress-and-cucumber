// actor
class User {
    static attemptsTo(...tasks) {
        tasks.forEach(task => task.perform());
    }
}

// tasks
class OpenHomePage {
    perform() {
        cy.visit('https://www.marjanemall.ma/');
    }
}

class SelectCategory {
    constructor(categoryName) {
        this.categoryName = categoryName;
    }

    perform() {
        cy.get(".category-slider-title").contains(this.categoryName).click();
    }
}

// task
class SearchProduct {
    constructor(searchTerm) {
        this.searchTerm = searchTerm;
    }

    perform() {
        cy.get('#autocomplete-0-input').type(`${this.searchTerm}{enter}`);
        cy.get('.page-title').should('contain', this.searchTerm);
    }
}

// task
class AddProductToCart {
    constructor(productName) {
        this.productName = productName;
    }

    perform() {
        cy.contains(this.productName).parents('.product-item-details').within(() => {
            cy.get('.action').click();
        });
        cy.get('#confirmBox').should("be.visible");
        cy.wait(6000);
    }
}

// question
class SeeCartContent {
    constructor(productName) {
        this.productName = productName;
    }
    
    perform() {
        cy.get('[data-block="minicart"]').click();
        cy.get(".minicart-items-wrapper").within(() => {
            cy.get(".product-item-name").should("contain", this.productName);
            cy.get(".details-qty .item-qty").invoke("val").should("eq", '1');
        });
    }
}

// Le test orchestré par l'acteur "User"
describe('Screenplay Pattern Example', () => {
    it('should allow user to add a product to the cart', () => {
        User.attemptsTo(
            new OpenHomePage(),
            new SelectCategory('Informatique'),
            new SearchProduct('laptop'),
            new AddProductToCart('Microsoft surface laptop GO'),
            new SeeCartContent('Microsoft surface laptop GO')
        );
    });
});
