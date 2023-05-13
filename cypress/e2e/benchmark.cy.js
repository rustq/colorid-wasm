const TIMEOUT = 1000;
const LIMIT = 200;

describe('template spec', () => {

  it('nanoid', () => {
    cy.visit('http://127.0.0.1:9000/cypress-bench/nanoid.html');
    cy.get('body', { timeout: TIMEOUT }).should(($body) => {
      expect((+$body.text()) < LIMIT).to.eq(true)
    });
  })

  it('colorid-wasm', () => {
    cy.visit('http://127.0.0.1:9000/cypress-bench/colorid-wasm.html');
    cy.get('body', { timeout: TIMEOUT }).should(($body) => {
      expect((+$body.text()) < LIMIT).to.eq(true)
    });
  })

  it('uuid-v4', () => {
    cy.visit('http://127.0.0.1:9000/cypress-bench/uuid-v4.html');
    cy.get('body', { timeout: TIMEOUT }).should(($body) => {
      expect((+$body.text()) < LIMIT).to.eq(true)
    });
  })

  it('crypto-randomUUID', () => {
    cy.visit('http://127.0.0.1:9000/cypress-bench/crypto-randomUUID.html');
    cy.get('body', { timeout: TIMEOUT }).should(($body) => {
      expect((+$body.text()) < LIMIT).to.eq(true)
    });
  })
})