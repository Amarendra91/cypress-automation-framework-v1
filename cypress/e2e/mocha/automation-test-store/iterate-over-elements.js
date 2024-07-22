/// <reference types= 'cypress'/>

describe('Iterate over elements', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurltwo'));
  });
  it('Log all hair care product information', () => {
    cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    // cy.get('a[href*="product/category&path="]').contains('Makeup').click();
    // cy.get('a[href*="product/category&path="]').contains('Skincare').click();
    cy.get('.fixed_wrapper')
      .find('.prdocutname')
      .each(($el, index, $list) => {
        cy.log('Index:' + index + ' : ' + $el.text());
      });
  });
  it.only('Add specific product to cart', () => {
    cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    cy.get('.fixed_wrapper')
      .find('.prdocutname')
      .each(($el, index, $list) => {
        if ($el.text().includes('Curls to straight Shampoo')) {
          cy.wrap($el).click();
        }
      });
  });
});
