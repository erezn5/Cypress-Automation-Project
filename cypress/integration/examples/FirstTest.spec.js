/// <reference types="Cypress" />

import LoginPage from '../pageObject/LoginPage'
import ProductsPage from '../pageObject/ProductsPage'
import CartPage from '../pageObject/CartPage'
import CheckoutPage from '../pageObject/CheckoutPage'

describe('SauceDemoAutomationTest', function(){

    const cart = new CartPage()
    const products = new ProductsPage()
    const lp = new LoginPage()
    const checkoutPage = new CheckoutPage()

    it('Invalid Login', function(){
        lp.visit()
        cy.get('#login_credentials').then(function($elem){
            cy.log($elem)
            console.log($elem)
        })
        lp.login('invalid', 'user')
        cy.get('h3').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Login With Locked User', function(){
        lp.visit()
        lp.login('locked_out_user', 'secret_sauce')
        cy.get('h3').should('contain','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Valid Login', function(){
        lp.visit()
        lp.login('standard_user', 'secret_sauce')
    })

    it('Add Sauce Labs Backpack Item', function(){
        products.clickAddToCartButton('Sauce Labs Backpack')
        cy.get('.fa-layers-counter.shopping_cart_badge').then(($elem)=>{
            expect($elem).to.have.text('1')
        }).click()
    })

    it('Remove Sauce Labs Backpack Item', function(){
        console.log("Removing item from cart")
        cart.clickRemoveButton()
        cy.get('.fa-layers-counter.shopping_cart_badge').should('not.exist')
        cart.clickContinueShoppingButton()
    })

    it('Check Out an Item', function(){
        products.clickAddToCartButton('Sauce Labs Backpack')
        cy.get('.fa-layers-counter.shopping_cart_badge').then(($elem)=>{
            expect($elem).to.have.text('1')
        }).click()
        cart.clickCheckoutButton()
        checkoutPage.fillDetails('automation', 'tester', '12345678')
        if(cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')){
            console.log("Test Passed Successfully!")
        }else{
            cy.screenshot()
        }

    })
    
})