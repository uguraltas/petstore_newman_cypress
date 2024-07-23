
describe('Testing the Swagger Petstore', () => {
  it('Should return a new pet with POST method', () => {
    cy.fixture('NewPet.json').then((NewPet) => {
      cy.createNewPet({ body: NewPet }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
});


describe('Testing the Swagger Petstore', () => {
  it('Should update the name of a pet with PUT method', () => {
    cy.fixture('PUTNewPet.json').then((PUTNewPet) => {
      const newName = 'karabaş';
      cy.updatePetName(newName, PUTNewPet).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal(newName);
      });
    });
  });
});


describe('Testing the Swagger Petstore', () => {
  it('Should Find Pets by status', () => {
      const status = 'pending';
      cy.findByStatus({ status }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });


describe('Testing the Swagger Petstore', () => {
  it('Should Find Pets by ID', () => {
      const ID = '8979789078978969';
        cy.getPet({ ID }).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
    });


//This cy.request doesn't have Custom Command on the support/commands.js
describe('Updates a pet in the store with form data', () => {
  it('Should update a pet in the store', () => {
    
    const bodyRequest = {
      "name": "fino",
      "status": "pending"
      }
      
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet/8979789078978969',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: bodyRequest,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('code', 200);
        expect(response.body).to.have.property('type', 'unknown');
      })
    })
  });  

  

//This cy.request doesn't have Custom Command on the support/commands.js
describe('Deletes a pet', () => {
  it('Should delete a pet', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet/8979789078978969',
      headers: {
          'api-key': 'special-key',
          'Content-Type': 'application/json'
        },
      failOnStatusCode: false,
      followRedirect: true,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });

