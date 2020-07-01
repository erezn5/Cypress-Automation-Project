/// <reference types='Cypress' />
import DropDownMenuHandler from '../utils/DropDownMenuHandler'

class ProductsPage{
    clickAddToCartButton(value){
        cy.get('div.inventory_item_name').contains(value).click()
        cy.get('button[class="btn_primary btn_inventory"]').click()
        
    }

    

    selectItemFromMenu(value){
        const select = new DropDownMenuHandler();
        console.log(value)
        select.selectOption('.product_sort_container', value)
    }

    clickContinueShoppingButton(){

    }


}

export default ProductsPage