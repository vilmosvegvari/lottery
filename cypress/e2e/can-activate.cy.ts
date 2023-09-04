describe('template spec', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:4200');
  });

  it('does not let into game route', () => {
    cy.visit('http://localhost:4200/game');
    cy.url().should('not.contain', 'game');
  });
});
