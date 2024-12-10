@regression @cart
Feature: Cart Functionalities

  @setup
  Background:
    Given I am on the home page

  @navigation @smoke
  Scenario: Navigate through to Categories
    When I click on "CATEGORIES"
    Then I should see the main categories container
    When I click on "Phones"
    Then I should see the phones categories container
    When I click on "Laptops"
    Then I should see the laptops categories container
    When I click on "Monitors"
    Then I should see the monitors categories container

  @product @smoke @sanity
  Scenario: Product Selection
    When I click on "CATEGORIES"
    Then I should see the main categories container
    When I do click in a random product
    Then Should redirect to me to the product page

  @cart @smoke @sanity
  Scenario: Add to Cart
    When I click on "CATEGORIES"
    Then I should see the main categories container
    When I do click in a random product
    Then Should redirect to me to the product page
    When I do click on the add to cart button
    Then the product is added correctly to the cart

  @cart @purchasing @regression
  Scenario: Buying Cart
    When I click on "CATEGORIES"
    Then I should see the main categories container
    When I do click in a random product
    Then Should redirect to me to the product page
    When I do click on the add to cart button
    Then the product is added correctly to the cart
    When I click on "Cart" option
    Then I should see my cart with the product
    When I do click on the place order button
    Then I should see my place order form
    When I fill the form
    And I do click on the purchase button
    Then I should see the purchase confirmation

  @cart @deletion @smoke
  Scenario: Deleting product from cart
    When I click on "CATEGORIES"
    Then I should see the main categories container
    When I do click in a random product
    Then Should redirect to me to the product page
    When I do click on the add to cart button
    Then the product is added correctly to the cart
    When I click on "Cart" option
    Then I should see my cart with the product
    When I do click on delete item
    Then I should see my cart empty




