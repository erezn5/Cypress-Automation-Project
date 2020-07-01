/// <reference types='Cypress' />

class LoginPage{
    visit(){
        cy.visit('/index.html')
        cy.title().should('eq', 'Swag Labs')
    }

    login(username_input, password_input){
        this.fillUserName(username_input)
        this.fillPassword(password_input)
        this.submit()
    }

    fillUserName(username_input){
        const username = cy.get('#user-name')
        username.type(username_input)
    }

    fillPassword(password_input){
        const password = cy.get('#password')
        password.type(password_input)

    }

    submit(){
        cy.get('.btn_action').then(($elem) => {
            expect($elem).to.have.value('LOGIN')//Chai-jQuery Assert
        }).click()
    }
}

export default LoginPage