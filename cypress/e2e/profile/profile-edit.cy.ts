let profileId = '';

describe('Open profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Profile page successful loaded', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Tester');
    });
    it('Profile card edit', () => {
        const newFirstName = 'firstname';
        const newLastName = 'lastname';

        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
});
