describe('Login Test', () => {
  it ('Login using dynamically created user', () => {
    cy.fixture('user').then((user) => {
      cy.visit('https://infra.groovio.com.au/')

      cy.get(
        'body > div:nth-child(1) > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)'
      ).click()

      cy.get('.navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get(':nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item').click()

      cy.get('.mb-3 > .col-md-12 > .form-input-box > #exampleInputPassword1').type(user.email)
      cy.get('.row.mb-2 > .col-md-12 > .form-input-box > #exampleInputPassword1').type(user.password)
      cy.get('.btn').click()
      cy.get('#otp').type('1234')
      cy.get('.btn').click()
      
    })
  })



  it.only('Login using Username and Password as Hardcoded ', () => {
    cy.fixture('user').then((user) => {
      cy.visit('https://infra.groovio.com.au/')

      cy.get(
        'body > div:nth-child(1) > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)'
      ).click()

      cy.get('.navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get(':nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
      cy.get('#exampleInputPassword1[name="email"]').type('miku@yopmail.com',{delay : 200})
      //  #exampleInputPassword1[name = "email"]
      cy.get('#exampleInputPassword1[name="password"]').type('Test@123',{delay :300})
      //  #exampleInputPassword1[name="password"
      cy.get(".btn.btn-primary").click()
      cy.get('#otp').type('1234',{delay: 200})
      cy.wait(1000);
      cy.get('.btn',{delay:200}).click()
      cy.get(".icon-setting").click()
      cy.get('a[href="/setting-policies"]').click()
      
      cy.get('.ck-editor__editable[role="textbox"]')
  .should('be.visible')
  .click()
  .type('This is my waiver and policy text.', { delay: 50 });


        
          Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore the CKEditor error
        if (err.message.includes("Cannot read properties of null (reading 'root')")) {
          return false; // prevents Cypress from failing the test
        }
      });
    })
  })
})
