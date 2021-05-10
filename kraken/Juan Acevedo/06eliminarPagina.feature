Feature: Shared board connection

  @user1 @web
  Scenario: Crear una pagina inmeditamente
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "acevedobedoya@gmail.com" into input field having id "ember8"
    Then I enter "abcd1234*+" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 2 seconds
    Then I click on element having id "ember30"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-content-entry-title"
    Then I wait for 2 seconds
    Then I click on element having css selector ".post-settings"
    Then I click on element having css selector ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"
    Then I click on element having css selector ".gh-btn.gh-btn-red"
