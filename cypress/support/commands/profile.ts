export const updateProfile = (firtName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname')
        .clear()
        .type(firtName ?? 'new');
    cy.getByTestId('ProfileCard.lastname')
        .clear()
        .type(lastName ?? 'lastname');
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8008/profile/${profileId}`,
        headers: {
            Authorization: 'asdfasdf',
        },
        body: {
            id: '4',
            firstname: 'Tester',
            lastname: 'Qa',
            age: 24,
            currency: 'UAH',
            country: 'Ukraine',
            city: 'Kyiv',
            username: 'testuser',
            avatar: 'https://placehold.co/120?text=QA',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firtName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
