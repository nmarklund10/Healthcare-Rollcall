context('Utils tests', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3000`)
    })

    const fillLoginFields = (email, password) => {
        cy.get('[data-cy="email"]').type(email).should('have.value', email)
        cy.get('[data-cy="password"]').type(password)
        cy.get('[data-cy="login"]').click()
    }

    it('Should give invalid email', () => {
        const email = 'test'
        const password = 'test'
        fillLoginFields(email, password)

        cy.get('[data-cy="alert"]').invoke('text').should('contain', 'format')
    })

    it('Should give wrong password', () => {
        const email = 'test@test.test'
        const password = 't'
        fillLoginFields(email, password)

        cy.get('[data-cy="alert"]').invoke('text').should('contain', 'combination')
    })

    it('Should login', () => {
        const email = 'test@test.test'
        const password = 'test'
        fillLoginFields(email, password)

        cy.url().should('include', '/dashboard')
    })

})
