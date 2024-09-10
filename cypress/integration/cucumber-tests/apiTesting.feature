Feature: API Testing with Cypress Cucumber

    As an admin
    I want to get all users
    And I want to add a new user
    And I want to update an existing user
    And I want to delete an existing user

    Scenario: Validate the GET request for retrieving user data
        Given I have a valid API endpoint
        When I send a GET request to the API
        And Status code should be 200
        Then Response body should contain user data
    
    Scenario: Add a new user
        Given I have a valid API endpoint to add
        When I send a POST request to the API with valid user data
        And Status code should be 201
        Then Response body should contain the newly created user data

    Scenario: Update an existing user
        Given I have a valid API endpoint to update
        When I send a PUT request to the API with valid user data
        And Status code should be 200
        Then Response body should contain the updated user data

    Scenario: Delete an existing user
        Given I have a valid API endpoint to delete
        When I send a DELETE request to the API
        And Status code should be 204
        Then Response body should be empty