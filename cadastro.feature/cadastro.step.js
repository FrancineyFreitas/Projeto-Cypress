import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I access the registration page', () => {
  cy.visit('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp');
});

When('I fill in all required fields correctly', () => {
  cy.get('#firstName.whsOnd.zHQkBf').type('João');
  cy.get('#lastName.whsOnd.zHQkBf').type('de Deus');
  cy.get('#username.whsOnd.zHQkBf').type('joao.silvaT');
  cy.get('#whsOnd.zHQkBf').type('senha123');
  

  // Preencha os demais campos necessários
});

And('I click the submit button', () => {
  cy.get('#btn-enviar').click();
});

Then('I should be redirected to the confirmation page', () => {
  cy.url().should('include', '/confirmacao');
});
