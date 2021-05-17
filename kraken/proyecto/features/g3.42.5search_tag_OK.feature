Feature: Search tag
    Background:
        Given I navigate to page "http://localhost:2369/ghost/#/signin"
        When I enter "machado.albeiro@gmail.com" into input field having id "ember8"
        * I enter "0123456789" into input field having id "ember10"
        * I click on element having id "ember12"    
        Then I'm into the dashaboard admin 

   @user1 @web   
    Scenario: As logged user I want to search the default tag named "Getting started"
        Given I'm logged as "Albeiro Cuadrado"
        When I'm into the dashaboard admin 
        And I click on element having css selector ".gh-nav-btn-search"
        * I enter "Getting started" into input field having css selector ".gh-nav-search-input .ember-power-select-trigger input"
        * I click on element having css selector ".ember-power-select-group .ember-power-select-option"
        Then I should see text "New tag"
    