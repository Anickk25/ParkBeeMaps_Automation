describe('ParkBee UAT – Reg Tests', () => {
  const URL = 'https://uat.parkbee.com/en';

  beforeEach(() => {
    cy.visit(URL);
    cy.get('body').then(($body) => {
      if ($body.find('#CybotCookiebotDialogBodyButtonDecline').length) {
        cy.get('#CybotCookiebotDialogBodyButtonDecline', { timeout: 10000 })
          .should('be.visible')
          .click();
      }
    });
    cy.title().should('eq', 'Smart parking wherever you go | Find your parking space');
  });


  it('Scenario 1 → Hourly parking → Search Amsterdam', () => {
    

    cy.get("input[placeholder='Search place or address']").type('amsterdam');
    cy.get('.selected', { timeout: 10000 }).click({ force: true });

    cy.origin('https://maps-web-uat.parkbee.com', () => {
      cy.contains('button', 'List', { timeout: 10000 }).click({ force: true });
      cy.get('maps-location-card.hydrated', { timeout: 20000 })
        .should('have.length.gt', 0)
        .and('be.visible');
      cy.log('Scenario 1 PASSED – Hourly results visible!');
    });
  });


it('Scenario 2 → Monthly parking → Search Amsterdam with start date', () => {
  cy.get('pb-hero[variant="primary"] li:nth-child(2) pb-typography span', { timeout: 15000 }).click();

  cy.get("input[placeholder='Search place or address']").type('amsterdam');
  cy.get('.selected', { timeout: 10000 }).click({ force: true });

  cy.origin('https://maps-web-uat.parkbee.com', () => {
    cy.get("p[class='body-small-2']", { timeout: 15000 }).click();
    cy.get("input[placeholder='Start parking from']").click();
    cy.contains('November 2025', { timeout: 10000 }).should('be.visible');
    cy.contains('button', '20').click({ force: true });
    cy.contains('button', 'Search').click();
    cy.contains('button', 'List', { timeout: 10000 }).click({ force: true });
    cy.get('maps-location-card.hydrated', { timeout: 30000 })
      .should('have.length.gt', 0)
      .and('be.visible');

    cy.log('Scenario 2 PASSED – Monthly results visible!');
  });
});
it('Scenario 3 → Park now → Search Amsterdam → Click List button → See list', () => {


  cy.contains('span', 'Park now').click({ force: true });
  cy.get('input[placeholder="Search place or address"]').type('amsterdam');
  cy.get('.selected', { timeout: 10000 }).click({ force: true });
  cy.origin('https://maps-web-uat.parkbee.com', () => {
  cy.contains('button', 'List', { timeout: 10000 }).click({ force: true });
 cy.get('maps-location-card.hydrated', { timeout: 20000 })
      .should('have.length.gt', 0)
      .and('be.visible');

   cy.log('Scenario 3 PASSED – List is displayed successfully!');
  });
});
});