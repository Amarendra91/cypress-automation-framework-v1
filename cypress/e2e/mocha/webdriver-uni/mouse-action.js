/// <reference types= 'cypress'/>

describe('Verify mouse actions', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurlone'));
  });
  it('', () => {
    cy.log('Hello world');
  });
});
