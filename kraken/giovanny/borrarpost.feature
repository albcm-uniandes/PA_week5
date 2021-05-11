Feature: Shared board connection 

@user1 @web
    Scenario: Borrar post ultimo publicado
    Given I navigate to page "http://localhost:2368/ghost/#/signin/"
	Then I enter "vinni9@gmail.com" into input field having id "ember8"
	Then I enter "nohayclave1" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
	Then I click on element having css selector "li[class*='gh-list-row gh-posts-list-item ember-view']"
	Then I click on element having css selector "button[class*='post-settings']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-red gh-btn-icon ember-view']"
	Then I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
	