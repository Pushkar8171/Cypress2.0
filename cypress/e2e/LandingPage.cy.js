describe('Groovio Test ', () => {


  it('Test 1 - Verify title positive' , () => {
    cy.visit('https://infra.groovio.com.au/')
    cy.title().should('eq', 'Groovio')
  })


  it('Test 2 - Verify Title Negative', () => {
    cy.visit('https://infra.groovio.com.au/')
    cy.title().should('not.eq', 'GroovioPush');
  })

 
})