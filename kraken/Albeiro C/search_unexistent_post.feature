Feature: Search
    Background:
        Given I navigate to page "http://localhost:2368/ghost/#/signin"
        When I enter "machado.albeiro@gmail.com" into input field having id "ember8"
        * I enter "0123456789" into input field having id "ember10"
        * I click on element having id "ember12"    
        Then I'm into the dashaboard admin 
        
    @user1 @web       
    Scenario: As logged user I want to search an unexistent post
        Given I'm logged as "Albeiro Cuadrado"
        When I'm into the dashaboard admin 
        And I click on element having css selector ".gh-nav-btn-search"
        * I enter "__RESOURCE_NOT_FOUND__" into input field having id "ember67"
        Then I should see no results found