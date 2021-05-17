Feature: Shared board connection
  
    @user1 @web
    Scenario: Borrar tag
    Given I navigate to page "<URL>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I click on element having css selector "a[href*='tags']"
	Then I click on element having css selector "li[class*='gh-list-row gh-tags-list-item ember-view']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-red gh-btn-icon mb15']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-red gh-btn-icon ember-view']"
	Then I click on element having css selector "a[href*='tags']"
	
	
	
	