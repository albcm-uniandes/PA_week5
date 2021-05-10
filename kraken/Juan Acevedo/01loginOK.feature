Feature: Shared board connection

  @user1 @web
  Scenario: Ingresar a la zona de administración de forma exitosa
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "acevedobedoya@gmail.com" into input field having id "ember8"
    Then I enter "abcd1234*+" into input field having id "ember10"
    Then I click on element having id "ember12"    
