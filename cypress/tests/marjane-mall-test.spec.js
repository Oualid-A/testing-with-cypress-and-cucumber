describe('Marjane mall navigation', () => {
    beforeEach(() => {
        cy.visit('https://www.marjanemall.ma/')
    })

    it('should display landing page', () => {
        cy.get('.swiper-wrapper').should('be.visible');
    })

    it.only('should display navigation menu', () => {
        cy.get('#main-cat').click();

        cy.get('#level-p').should('be.visible');
        
    })
})
