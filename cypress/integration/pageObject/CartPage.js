/// <reference types='Cypress' />

class CartPage {

    clickCheckoutButton(){
        cy.get('a.btn_action').click()
    }

    clickContinueShoppingButton(){
        cy.get('a.btn_secondary').click()
    }

    clickRemoveButton(){
        cy.get('button[class="btn_secondary cart_button"]').click()
    }

    getNumberOfItemsInCart(){
        cy.get('.fa-layers-counter.shopping_cart_badge').text().should(($num)=>{
            const text = $num.text
        })
        return text
    }

}

export default CartPage