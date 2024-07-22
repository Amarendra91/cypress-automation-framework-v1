/// <reference types= 'cypress'/>

describe('Alias and Invoke Functionality', () => {
  beforeEach(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurltwo'));
  });
  it('Validate a specific hair care product', () => {
    cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
    cy.get('.fixed_wrapper .prdocutname')
      .eq(0)
      .invoke('text')
      .as('productThumbnail');
    cy.get('@productThumbnail').its('length').should('be.gt', 5);
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
  });
  it('Validate product thumbnail count on Automation Test Store Home page', () => {
    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', 16);
    cy.get('@productThumbnail')
      .find('.productcart')
      .invoke('attr', 'title')
      .should('include', 'Add to Cart');
  });
  it.only('Calculate total proce of both nonsale and sale products', () => {
    cy.get('.thumbnail').as('productThumbnail');
    // cy.get('@productThumbnail')
    //   .find('.oneprice')
    //   .each(($el, index, $list) => {
    //     $el.text();
    //   });
    cy.get('@productThumbnail')
      .find('.oneprice')
      .invoke('text')
      .as('nonSaleItemPrice');

    cy.get('@productThumbnail')
      .find('.pricenew')
      .invoke('text')
      .as('saleItemPrice');

    var allItemsPriceTotal = 0;
    cy.get('@nonSaleItemPrice').then(($priceText) => {
      var nonSaleItemsPriceTotal = 0;
      var nonSaleItemPrice = $priceText.split('$');
      var i;
      for (i = 0; i < nonSaleItemPrice.length; i++) {
        cy.log(nonSaleItemPrice[i]);
        nonSaleItemsPriceTotal += Number(nonSaleItemPrice[i]);
      }
      allItemsPriceTotal += nonSaleItemsPriceTotal;
      cy.log('Non-sale items total price:' + ' ' + nonSaleItemsPriceTotal);
    });
    cy.get('@saleItemPrice')
      .then(($priceText) => {
        var saleItemsPriceTotal = 0;
        var saleItemPrice = $priceText.split('$');
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPriceTotal += Number(saleItemPrice[i]);
        }
        allItemsPriceTotal += saleItemsPriceTotal;
        cy.log('Sale items total price:' + ' ' + saleItemsPriceTotal);
      })
      .then(() => {
        cy.log(
          'Total price of both non-sale and sale items is:' +
            ' ' +
            allItemsPriceTotal
        );
        expect(allItemsPriceTotal).to.equal(648.5);
      });
  });
});
