describe('Navigation', () => {
  it('should include new period query from url', () => {
    //visited default page
    cy.visit('http://localhost:3000/')

    //filter 1 Day
    cy.get('#1D').click()

    //url should include new period query after click
    cy.url().should('include', 'period=1D')
  })
})
