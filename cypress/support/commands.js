// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createNewPet', () => {
    cy.fixture('NewPet.json').then((NewPet) => {
      cy.request({
        method: 'POST',
        url: Cypress.env('useBaseUrl'),
        body: NewPet,
        followRedirect: true,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });

  Cypress.Commands.add('updatePetName', (newName) => {
    cy.fixture('PUTNewPet.json').then((NewPet) => {
      NewPet.name = newName;
      cy.request({
        method: 'PUT',
        url: Cypress.env('useBaseUrl'),
        body: NewPet,
        followRedirect: true,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });

  Cypress.Commands.add('findByStatus', () => {
      cy.request({
        method: 'GET',
        url: Cypress.env('findByStatusPendingUrl'),
        followRedirect: true,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });

  Cypress.Commands.add('getPet', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('getPetUrl'),
      followRedirect: true,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  Cypress.Commands.add('createUser', () => {
    cy.fixture('createUser.json').then((createUser) => {
      cy.api({
        method: 'POST',
        url: Cypress.env('createUserUrl'),
        body: createUser,
        followRedirect: true,
        failOnStatusCode: false
      }).then(response => { return response }); 
      });
    });
  
