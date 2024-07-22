/// <reference types= 'cypress'/>

describe('Inspect Automation Test Store items using chain of commands', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurltwo'));
  });
  it.only('Click on the first item displayed under featured section on homepage using item name text', () => {
    cy.get('h1[class="heading1"]').should('contain', 'Featured');
    cy.get('.prdocutname')
      .contains('Skinsheen Bronzer Stick')
      .click()
      .then(function (itemHeaderTest) {
        console.log('Selected the following product:' + itemHeaderTest.text());
      });
  });

  it('Click on the first item displayed under featured section on homepage using item index', () => {
    cy.get('h1[class="heading1"]').should('contain', 'Featured');
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
