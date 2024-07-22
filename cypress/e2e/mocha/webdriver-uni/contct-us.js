/// <reference types= 'cypress'/>

describe('Test Contact Us Form via WebdriverUni', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurlone'));
  });
  it('User should be able to submit contact Us form successfully', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    cy.get('input[name="first_name"]').type('Testuser');
    cy.get('input[name="last_name"]').type('One');
    cy.get('input[name="email"]').type('testuserone@test.com');
    cy.get('textarea[name="message"]').type('How can I learn Cypress?');
    cy.get('input[value="SUBMIT"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
  });
  it('User should not be able to submit contact Us form successfully as all fields are mandatory', () => {
    cy.visit('https://www.webdriveruniversity.com');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.get('input[name="first_name"]').type('Testuser');
    cy.get('input[name="last_name"]').type('One');
    // cy.get('input[name="email"]').type('testuserone@test.com');
    cy.get('textarea[name="message"]').type('How can I learn Cypress?');
    cy.get('input[value="SUBMIT"]').click();
    cy.get('body').contains('Error: all fields are required');
  });
});
