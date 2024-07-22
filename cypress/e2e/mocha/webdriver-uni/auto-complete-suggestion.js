/// <reference types= 'cypress'/>

describe('Verify auto-complete dropdown list suggestion', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurlone'));
  });
  it('Select specific product from auto-complete dropdown list via webdriveruni page', () => {
    cy.get('#autocomplete-textfield')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.autoSuggestion('a', 'Avacado');
    cy.autoSuggestion('g', 'Grapes');
    cy.autoSuggestion('z', 'Zucchini');
  });
});
