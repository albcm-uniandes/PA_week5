Feature: Shared board connection 

@user1 @web
    Scenario: Borrar post ultimo publicado
    Given I navigate to page "<URL>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
	Then I click on element having css selector "h3[class*='gh-content-entry-title']"
	Then I click on element having css selector "button[class*='post-settings']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-red gh-btn-icon ember-view']"
	Then I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
	