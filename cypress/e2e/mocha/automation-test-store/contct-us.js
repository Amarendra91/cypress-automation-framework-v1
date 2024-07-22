/// <reference types= 'cypress'/>

describe('Test Contact Us Form via Automation Test Store', () => {
  before(() => {
    // cy.visit('/'); it will work if the baseurl mentioned
    cy.visit(Cypress.env('testurltwo'));
  });
  it('User should be able to submit contact Us form successfully', () => {
    cy.get('a[href*="contact"]')
      .click()
      .then(function (footerLinkName) {
        cy.log(
          'User has clicked on the ' +
            footerLinkName.text() +
            ' form link successfully.'
        );
      });
    cy.get('input[name="first_name"]').type('Testuser');
    cy.get('input[id="ContactUsFrm_email"]').type('testuserone@test.com');
    cy.get('textarea[name="enquiry"]').type(
      'Do you provide additional discount for bilk order?'
    );
    cy.get('button[title="Submit"]').click();
    // cy.get('.mb40 > :nth-child(3)').should(
    //   'have.text',
    //   'Your enquiry has been successfully sent to the store owner!'
    // );
    cy.contains('div[class="col-md-12 col-xs-12 mt20"]', ' Contact Us')
      .find('.contentpanel .mb40')
      .should(
        'contain',
        'Your enquiry has been successfully sent to the store owner!'
      );
  });
});
