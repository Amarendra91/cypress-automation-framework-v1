/// <reference types= 'cypress'/>

describe('Verify mouse actions', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurlone'));
  });
  it('User should be able to perform drag and drop.', () => {
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.get('#draggable').trigger('mousedown', { which: 1 });
    cy.get('#droppable')
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
  });
  it.only('User should be able to perform double mouse click.', () => {
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.get('#double-click').dblclick();
  });
});
