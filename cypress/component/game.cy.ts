import GameComponent from '../../src/app/game/game.component';

describe('game.cy.ts', () => {
  it('has the right amount of boards', () => {
    cy.mount(GameComponent, { componentProperties: { numberOfBoards: 3 } });

    cy.get('.board').should('have.length', 3);
  });
});
