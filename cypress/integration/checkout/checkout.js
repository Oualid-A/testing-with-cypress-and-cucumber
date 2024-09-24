import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductPage from './classes/ProductPage';
import CategoryPage from './classes/CategoryPage';
import SearchPage from './classes/SearchPage';

Given('I open marjane mall website',() =>{
    ProductPage.visitProductPage()
})

When('I select category {string}', (category) => {
    CategoryPage.selectCategory(category);
})

When('I search for {string}', (searchTerm) => {
    SearchPage.searchProduct(searchTerm);
})

When('I select the product {string}', (product) => {
    ProductPage.addProductToCart(product)
})

Then('The Product is in cart {string}', (product)=>{
    ProductPage.checkProductInCart(product, 1);
})

