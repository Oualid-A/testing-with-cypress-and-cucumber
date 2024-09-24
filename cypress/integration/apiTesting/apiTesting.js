import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let response;

// first Scenario Get all users
Given('I have a valid API endpoint', () => {
  cy.wrap({ url: 'https://reqres.in/api/users?page=2' }).as('apiEndpoint');
});

When('I send a GET request to the API', () => {
  cy.get('@apiEndpoint').then((api) => {
    cy.request({
      method: 'GET',
      url: api.url,
    }).then((res) => {
      response = res;
      console.log(res);
    });
  });
});

Then('Status code should be 200', () => {
  expect(response.status).to.eq(200);
});

Then('Response body should contain user data', () => {
  expect(response.body.data).to.have.length(6)
  expect(response.body.data).to.be.an('array');
});

// second scenario Add a new user
Given('I have a valid API endpoint to add', () => {
  cy.wrap({ url: `https://reqres.in/api/users` }).as('apiEndpoint');
});

When('I send a POST request to the API with valid user data', () => {
  cy.get('@apiEndpoint').then((api) => {
    cy.request(
      'POST',
      api.url,
      {
        name: 'morpheus',
        job: 'leader',
      }).then((res) => {
        response = res;
        console.log(res);
      });
  });
});

Then('Status code should be 201', () => {
  expect(response.status).to.eq(201);
});

Then('Response body should contain the newly created user data', () => {
  expect(response.body.name).to.eq('morpheus');
  expect(response.body.job).to.eq('leader');
});

// third scenario update a user
Given('I have a valid API endpoint to update', () => {
  cy.wrap({ url: `https://reqres.in/api/users/2` }).as('apiEndpoint');
});

When('I send a PUT request to the API with valid user data', () => {
  cy.get('@apiEndpoint').then((api) => {
    cy.request(
      'PUT',
      api.url,
      {
        name: 'morpheus',
        job: 'zion resident',
      }).then((res) => {
        response = res;
        console.log(res);
      });
  });
});

Then('Status code should be 200', () => {
  expect(response.status).to.eq(200);
});

Then('Response body should contain the updated user data', () => {
  expect(response.body.name).to.eq('morpheus');
  expect(response.body.job).to.eq('zion resident');
});

// fourth scenario delete a user
Given('I have a valid API endpoint to delete', () => {
  cy.wrap({ url: `https://reqres.in/api/users/2` }).as('apiEndpoint');
});

When('I send a DELETE request to the API', () => {
  cy.get('@apiEndpoint').then((api) => {
    cy.request('DELETE', api.url).then((res) => {
      response = res;
      console.log(res);
    });
  });
});

Then('Status code should be 204', () => {
  expect(response.status).to.eq(204);
});

Then('Response body should be empty', () => {
  expect(response.body).to.be.empty;
});