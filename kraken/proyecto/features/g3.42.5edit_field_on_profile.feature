Feature: Edit OK profile information

  Background:
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    When I enter "machado.albeiro@gmail.com" into input field having id "ember8"
    * I enter "0123456789" into input field having id "ember10"
    * I click on element having id "ember12"    
    Then I'm into the dashaboard admin 


  @user1 @web
  Scenario: As logged user I want to edit, my user location
    Given I'm logged as "Albeiro Cuadrado"
    When I'm into the dashaboard admin 
    And I click on element having id "ember39"
    And I click on element having id "ember72"
    * I enter "x" into input field having id "user-location"
    * I click on element having id "ember82"
    Then I should see text "Saved"
