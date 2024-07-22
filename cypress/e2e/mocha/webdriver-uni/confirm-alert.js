/// <reference types= 'cypress'/>

describe('Handling JS Confirm Alert', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurlone'));
  });
  it('Validate JS confirm alert box works correctly when clicked ok button', () => {
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.get('#button4').click();
    cy.on('window:confirm', (text) => {
      return true;
    });
    cy.get('#confirm-alert-text').contains('You pressed OK!');
  });
  it('Validate JS confirm alert box works correctly when clicked cancel button', () => {
    cy.visit('https://www.webdriveruniversity.com');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.get('#button4').click();
    cy.on('window:confirm', (text) => {
      return false;
    });
    cy.get('#confirm-alert-text').contains('You pressed Cancel!');
  });

  it.only('Validate JS confirm alert box works correctly using a stub', () => {
    cy.visit('https://www.webdriveruniversity.com');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    const stub = cy.stub();
    cy.on('window:confirm', stub);
    cy.get('#button4')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!');
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get('#confirm-alert-text').contains('You pressed OK!');
      });
  });
});
