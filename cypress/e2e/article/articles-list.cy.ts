describe('Open articles list page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('Articles list successfully loaded', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('This test is skipped', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should(
            'have.length.greaterThan',
            3000,
        );
    });
});
