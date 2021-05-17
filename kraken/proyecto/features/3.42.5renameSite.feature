Feature: Cambiar configuraciones del sitio

  @user1 @web
  Scenario: Cambiar nombre del sitio
    Given I navigate to page "http://localhost:2369/ghost/#/signin"
    Then I enter "<email>" into input field having id "ember8"
    Then I enter "<password>" into input field having id "ember10"
    Then I click on element having id "ember12"

    Then I click on element having css selector ".ember-view[href="#/settings/general/"]"
    Then I click on element having css selector ".gh-setting-first .gh-setting-action"
    Then I clear text having class ".ember-text-field.gh-input.ember-view"
    Then I enter "Cambiar titulo de sitio" into input field having css selector ".ember-text-field.gh-input.ember-view"
    Then I click on element having css selector ".gh-btn.gh-btn-blue"