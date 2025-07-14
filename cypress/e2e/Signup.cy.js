describe('Groovio Test', () => {
  it.skip('Test 1 - Verify Signup as a Studio Owner', () => {
    cy.visit('https://infra.groovio.com.au/')
1    // ✅ Generate dynamic data
    const timestamp = Date.now()
    const email = `user_${timestamp}@yopmail.com`
    const mobile = `9${Math.floor(100000000 + Math.random() * 900000000)}`
    const password = 'Test@123' // ✅ Define password here

    // ✅ Navigate to signup  
    cy.get(
      'body > div:nth-child(1) > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)', 
      { delay: 100 }
    ).click()

    cy.get("ul.dropdown-menu.show li:nth-child(1) a:nth-child(1)", { delay: 100 }).click()

    // ✅ Fill form
    cy.get('#firstName').should('be.visible');
    cy.get('#firstName').type('DJ', { delay: 100 })
    cy.get('#lastName').should('be.visible');
    cy.get('#lastName').type('Quest', { delay: 100 })
    cy.get('#businessName').should('be.visible')
    cy.get('#businessName').type('Drone James Studio', { delay: 100 })
    cy.get('.react-tel-input > .form-control').type(mobile, { delay: 100 })
    cy.get('#email').type(email, { delay: 100 })
    cy.get('#password').type(password, { delay: 100 })
    cy.get('#confirmPassword').type(password, { delay: 100 })
    cy.get('#terms_and_privacy').click()
    cy.get('.btn', { delay: 100 }).click()
    cy.get('.swal2-confirm', { delay: 100 }).click()
    cy.get('#otp').type('1234', { delay: 50 })
    cy.get('.btn', { delay: 50 }).click()
    cy.wait(2000)
    cy.get('.close > img').click()
    
    cy.get('.name-div > :nth-child(2) > :nth-child(3)', { timeout: 10000 })
  .should('be.visible')
  .and('have.text', email)
   return
// ✅ Continue after assertion
cy.wait(4000)
    return
    cy.wait(4000)
    cy.get(':nth-child(15) > a').click()
    cy.get('.swal2-confirm').click()

    // ✅ Save email and password for login
    cy.writeFile('cypress/fixtures/user.json', {
      email,
      password
    })
  })

  // it('Test 2 - Verify Signup as a Student', () => {
  //   // ✅ Ignore known React hydration errors to prevent test failure
  //   Cypress.on('uncaught:exception', (err) => {
  //     if (
  //       err.message.includes('Hydration failed') ||
  //       err.message.includes('React error #418') ||
  //       err.message.includes('Minified React error #418')
  //     ) {
  //       return false;
  //     }
  //   });
  
  //   // ✅ Visit the student staging site
  //   cy.visit('https://infra-staging-student.groovio.com.au/');
  
  //   // ✅ Wait for and click the login/signup button
  //   cy.get('.btn.btn-light').should('be.visible').click();
  
  //   // ✅ Optional: Assert page title if you know it
  //   cy.title().then((title) => {
  //     cy.log('Page title is:', title);
  //   });
  //   // cy.title().should('eq', 'Log in / Sign up'); // Uncomment if confirmed
  
  //   // ✅ Generate a dynamic email
  //   const timestamp = Date.now();
  //   const email = `user_${timestamp}@yopmail.com`;
  
  //   // ✅ Fill in the email field
  //   cy.get('.form-control').should('be.visible').type(email, { delay: 100 });
  
  //   // You can continue with further steps like clicking "Continue", OTP, etc.

  //   cy.get(".btn.btn-primary").should('be.visible').click()
  // });
  

  

  describe.only('Groovio Test', () => {
    it('Test 3 - Verify Signup  + Studio Profile steps for waivers policy and cancellation Policy ', () => {
      cy.visit('https://infra.groovio.com.au/')
  
      // ✅ Generate dynamic data
      const timestamp = Date.now()
      const email = `user_${timestamp}@yopmail.com`
      const mobile = `9${Math.floor(100000000 + Math.random() * 900000000)}`
      const password = 'Test@123' // ✅ Define password here
  
      // ✅ Navigate to signup
      cy.get(
        'body > div:nth-child(1) > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)', 
        { delay: 100 }
      ).click()
  
      cy.get("ul.dropdown-menu.show li:nth-child(1) a:nth-child(1)", { delay: 100 }).click()
  
      // ✅ Fill form
      cy.get('#firstName').type('DJ', { delay: 100 })
      cy.get('#lastName').type('Quest', { delay: 100 })
      cy.get('#businessName').type('Drone James Studio', { delay: 100 })
      cy.get('.react-tel-input > .form-control').type(mobile, { delay: 100 })
      cy.get('#email').type(email, { delay: 100 })
      cy.get('#password').type(password, { delay: 100 })
      cy.get('#confirmPassword').type(password, { delay: 100 })
      cy.get('#terms_and_privacy').click()
      cy.get('.btn', { delay: 100 }).click()
      cy.get('.swal2-confirm', { delay: 100 }).click()
      cy.get('#otp').type('1234', { delay: 50 })
      cy.get('.btn', { delay: 50 }).click()
      cy.wait(2000)
      cy.get('.close > img').click()
      cy.wait(4000)
      //cy.get(':nth-child(15) > a').click()
      //cy.get('.swal2-confirm').click()
      cy.wait(1000)





       cy.get(':nth-child(12) > [data-bs-toggle="collapse"]',{ delay: 100 }).click()
       cy.wait(100)
       cy.get('#collapseMenu6 > :nth-child(3) > a').click()
       cy.get('ul#collapseMenu6 li a.active[href="/setting-policies"]').click()
      //  cy.get('.ck-editor__editable_inline[contenteditable="true"]').clear().type('hello');
      // cy.get('.ck-editor__editable_inline[contenteditable="true"]').type(' hello');

  // .click({ force: true })  // ensures click happens even if hidden initially
  // .clear()                 // optional: clears previous content
  // .type('Test Done for Waivers Policy', { delay: 50 })  // delay mimics real typing




     

  //     // ✅ Save email and password for login
  //     cy.writeFile('cypress/fixtures/user.json', {
  //       email,
  //       password
       })
   })


  //})
})
