describe('create account test-suite', () => {

  //
  before(() => {
    cy.window(win => {
      win.Meteor.logout()
    })
  })

  it('load login page', () => {
    cy.visit('https://staging.lemlist.com');
    cy.url().should('include', 'staging.lemlist.com')
  })
})
