describe('Groovio Test', () => {

  it('Test 1 - Verify Signup as a Studio Owner', () => {
    cy.visit('https://infra.groovio.com.au/')

    // ✅ Generate dynamic email and mobile number
    const timestamp = Date.now()
    const email = `user_${timestamp}@yopmail.com`
    const mobile = `9${Math.floor(100000000 + Math.random() * 900000000)}`

    // ✅ Navigate to signup
    cy.get(
      'body > div:nth-child(1) > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)', 
      { delay: 100 }
    ).click() // Clicks dropdown

    cy.get("ul.dropdown-menu.show li:nth-child(1) a:nth-child(1)", { delay: 100 }).click() // Clicks "Studio Owner"

    // ✅ Fill form with dynamic data
    cy.get('#firstName').type('Roman', { delay: 100 })
    cy.get('#lastName').type('James', { delay: 100 })
    cy.get('#businessName').type('Roman James Studio', { delay: 100 })
    cy.get('.react-tel-input > .form-control').type(mobile, { delay: 100 })   // Dynamic phone
    cy.get('#email').type(email, { delay: 100 })                              // Dynamic email
    cy.get('#password').type('Test@123', { delay: 100 })
    cy.get('#confirmPassword').type('Test@123', { delay: 100 })
    cy.get('#terms_and_privacy').click()
    cy.get('.btn', { delay: 100 }).click()
    cy.get('.swal2-confirm', { delay: 100 }).click()
    cy.get('#otp').type('1234', { delay: 50 })
    cy.get('.btn', { delay: 50 }).click()
    cy.get('.close', { delay: 50 }).click()
    


    // ✅ Add submit if needed
    // cy.get('button[type="submit"]').click()
  })

})
