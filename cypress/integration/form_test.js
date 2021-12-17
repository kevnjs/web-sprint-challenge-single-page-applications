// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form
describe('Connect to Cypress', () => {
    it('Connects to URL', () => {
        cy.visit('http://localhost:3000');
    })
})

const nameInput = () => cy.get('input[name=name]');
const sizeOption = () => cy.get('select[name=size]');
const pepperoni = () => cy.get('input[name=pepperoni]');
const sausage = () => cy.get('input[name=sausage]');
const bacon = () => cy.get('input[name=bacon]');
const mushroom = () => cy.get('input[name=mushroom]')
const pizzaBtn = () => cy.get('button[id="order-pizza"]');
const orderBtn = () => cy.get('button[id="order-button"]');

describe('Add text to fields and check boxes', () => {
    it('Inputs name correctly and checks all boxes', () => {
        pizzaBtn().click()
        nameInput().type('Bob Smith')
        sizeOption().select('Small')

        pepperoni().check();
        pepperoni().uncheck();

        sausage().check();
        sausage().uncheck();

        bacon().check();
        bacon().uncheck();

        mushroom().check();
        mushroom().uncheck();
    })

})

