Feature: Shared board connection

  @user1 @web
  Scenario: Crear un post con publicación inmediatamente
    iven I navigate to page "http://localhost:2369/ghost/#/signin"
    Then I enter "<email>" into input field having id "ember8"
    Then I enter "<password>" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I wait for 2 seconds
    Then I click on element having id "ember28"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green"
    Then I wait for 2 seconds
    Then I enter "Titulo de prueba" into input field having tag "textarea"
    Then I enter "Texto de prueba" into input field having css selector ".__mobiledoc-editor.__has-no-content"
    Then I click on element having css selector ".gh-publishmenu"
    Then I click on element having css selector ".gh-btn.gh-btn-blue"
