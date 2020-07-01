/// <reference types="Cypress" />

class CheckoutPage {
    
    fillFirstName(value){
        cy.get('#first-name').type(value)
    }

    fillLastName(value){
        cy.get('#last-name').type(value)
    }
    
    fillPostalCode(value){
        cy.get('#postal-code').type(value)
    }

    clickContinueButton(){
        cy.get('[type="submit"]').click()
    }

    fillDetails(firstName, lastName, postalCode){
        this.fillFirstName(firstName)
        this.fillLastName(lastName)
        this.fillPostalCode(postalCode)
        this.clickContinueButton()
        cy.get('div.summary_info div.summary_value_label').should('contain','SauceCard #31337')
        cy.get('.btn_action').click()
    }

    clickFinishButton(){
        cy.get('a.btn_action').click()
    }

}

export default CheckoutPage