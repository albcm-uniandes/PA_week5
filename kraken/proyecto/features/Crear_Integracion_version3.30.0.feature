Feature: Shared board connection
  
    @user1 @web
  	Scenario: Crear integracion
    Given I navigate to page "<URL>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I click on element having css selector "a[href*='settings/integrations/']"
	Then I click on element having css selector "span[class*='db ml1 blue nudge-bottom--1 fw4']"
	Then I enter "integracion prueba 2" into input field having id "new-integration-name"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-green gh-btn-icon ember-view']"
	Then I click on element having css selector "a[href*='settings/integrations/']"
	
	
	
	
	