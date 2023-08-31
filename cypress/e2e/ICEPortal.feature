Feature: ICE Portal - Home page and Fancy Feasting

    Validating the landing Home page and navigating to Fancy Feasting page in ICE Portal

    Scenario: Verifying the "Our services at a glance" sub menu in ICE Portal home page
    Given The ICE Portal web address
    And Validated the home page title and url
    Then Validated the "Our services at a glance" heading and Fancy Feasting
    When Cliked on Fancy Feasting
    Then Validated Fancy Feasting page title, url and title main
    Then Validated Action main title
    And Validated Menu: Vegan BIO pretzel snack sauerkraut & mustard
    Then Click back button in Fancy Feasting page
    And Validated the home page title and url