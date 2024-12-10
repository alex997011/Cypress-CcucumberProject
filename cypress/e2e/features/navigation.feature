@navigation
Feature: Navigation Bar Options

  @setup
  Background:
    Given I am on the home page

  @shopping @cart @smoke
  Scenario: Navigate to Cart Page
    When I click on "Cart" option
    Then I should see cart content

  @regression
  Scenario: Open About Us Video
    When I click on "About us" option
    Then I should see about modal content

  @contact @form @regression
  Scenario: Open Contact Form
    When I click on "Contact" option
    Then I should see contact form content

  @authentication @login @smoke
  Scenario: Open Login Form
    When I click on "Log in" option
    Then I should see login form content

  @authentication @signup @smoke-test
  Scenario: Open Sign Up Form
    When I click on "Sign up" option
    Then I should see signup form content

