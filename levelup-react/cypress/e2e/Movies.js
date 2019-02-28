describe('view movies as anonymous', () => {
  it('can show movies list', () => {
    cy.visit('/')
      .get('.App-logo')
      .click();
  });
});
