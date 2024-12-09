Feature: Carousel Navigation

  Background:
    Given I am on the home page

  Scenario: Navigate through carousel using next button
    Then The navbar brand should be visible
    When I click in the control next
    Then The next element in the left should be visible

  Scenario: Navigate through carousel using prev button
    Then The navbar brand should be visible
    When I click in the control prev
    Then The next element in the right should be visible

  Scenario: Verify automatic slide transition
    Then The navbar brand should be visible
    And The first slide should be visible
    When I wait for the automatic transition
    Then The next slide should be automatically visible