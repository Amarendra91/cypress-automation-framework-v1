/// <reference types= 'cypress'/>
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('iFrame and Modals', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurlone'));
  });
  it('Handling iFrame and Modals', () => {
    cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true });
    cy.frameLoaded('#frame');
    cy.iframe().find('#button-find-out-more').click();
    cy.iframe().find('#myModal').as('modal');
    cy.get('@modal').should(($text) => {
      expect($text.text()).to.include(
        'we sell a wide range of electrical goods such as laptops, game consoles, cameras...'
      );
    });
    cy.get('@modal').contains('Close').click();
    cy.go('back');
  });
});
