describe('Groovio Test', () => {
  it('Test 1 - Verify Signup as a Studio Owner', () => {
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
    cy.get(':nth-child(15) > a').click()
    cy.get('.swal2-confirm').click()

    // ✅ Save email and password for login
    cy.writeFile('cypress/fixtures/user.json', {
      email,
      password
    })
  })
})
