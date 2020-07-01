/// <reference types="Cypress" />

class DropDownMenuHandler {

    selectOption(selector, value){
        cy.get(selector).select(value)
    }

}
export default DropDownMenuHandler