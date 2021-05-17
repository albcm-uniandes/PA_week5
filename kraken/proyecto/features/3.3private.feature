Feature: Cambiar configuraciones del sitio

  @user1 @web
  Scenario: Volver el sitio privado
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    Then I enter "<email>" into input field having id "ember8"
    Then I enter "<password>" into input field having id "ember10"
    Then I click on element having id "ember12"

    Then I click on element having css selector ".ember-view[href="#/settings/general/"]"
    Then I click on element having css selector ".for-switch .switch"
    Then I clear text having class ".ember-text-field.gh-input.ember-view"
    Then I enter "abcd1234" into input field having css selector ".ember-text-field.gh-input.ember-view"
    Then I click on element having css selector ".gh-btn.gh-btn-blue"