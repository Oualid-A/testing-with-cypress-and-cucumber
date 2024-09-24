Feature: Login to application
    As a invalid user 
    I cannot log into the application
    As a valid user 
    i want to login into the application

    Scenario: Invalid Login
        Given I open login page
        When I fill username with "invalid username"
        And I fill password with "invalid password"
        And I click submit login
        Then Display error message

    Scenario: Valid Login
        Given I open login page
        When I fill username with "username"
        And I fill password with "password"
        And I click submit login
        Then Display home page
