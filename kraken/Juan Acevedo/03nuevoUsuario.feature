Feature: Shared board connection

  @user1 @web
  Scenario: Crear un nuevo usuario
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "acevedobedoya@gmail.com" into input field having id "ember8"
    Then I enter "abcd1234*+" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 2 seconds
    Then I click on element having id "ember32"
    Then I wait for 2 seconds
    Then I click on element having css selector "button.gh-btn.gh-btn-green"
    Then I wait for 2 seconds
    Then I enter "usuarioprueba@gmail.com" into input field having id "new-user-email"
    Then I click on element having id "new-user-role"
    Then I click on element having id "ember81"