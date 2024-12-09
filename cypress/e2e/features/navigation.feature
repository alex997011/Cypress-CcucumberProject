Feature: Navigation Bar Options

  Background:
    Given I am on the home page

  Scenario: Navigate to Cart Page
    When I click on "Cart" option
    Then I should see cart content

  Scenario: Open About Us Video
    When I click on "About us" option
    Then I should see about modal content

  Scenario: Open Contact Form
    When I click on "Contact" option
    Then I should see contact form content

  Scenario: Open Login Form
    When I click on "Log in" option
    Then I should see login form content

  Scenario: Open Sign Up Form
    When I click on "Sign up" option
    Then I should see signup form content

