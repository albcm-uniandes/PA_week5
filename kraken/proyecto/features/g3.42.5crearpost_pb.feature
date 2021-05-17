Feature: Shared board connection 

	
@user1 @web
	Scenario: Crear post y publicarlo
	Given I navigate to page "<URL342>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I click on element having css selector "a[href*='posts']"
	Then I click on element having css selector "a[href*='editor/post']"
	Then I enter "Esta es " into input field having css selector "p"
	Then I enter "la prueba " into input field having css selector "p"
	Then I enter "gracias a CCH" into input field having css selector "p"
	Then I enter "TITULO POST KRAKEN" into input field having css selector "textarea"
	Then I click on element having css selector "div[class*='gh-btn']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon gh-btn-green ember-view']"
	Then I click on element having css selector "a[href*='posts']"			