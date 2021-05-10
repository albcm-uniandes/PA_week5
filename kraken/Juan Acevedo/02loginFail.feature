Feature: Shared board connection

  @user1 @web
  Scenario: Intentar ingresar a la zona de administración con un usuario errado
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "usuario@gmail.com" into input field having id "ember8"
    Then I enter "abcd1234*+" into input field having id "ember10"
    Then I click on element having id "ember12"
