Feature: Shared board connection
  
    @user1 @web
    Scenario: Invitar usuarios
    Given I navigate to page "<URL342>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I click on element having css selector "a[href*='staff']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-primary']"
	Then I enter "pruebas100@gmail.com" into input field having id "new-user-email"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-black gh-btn-icon ember-view']"
	Then I click on element having css selector "a[href*='staff']"
	
	
