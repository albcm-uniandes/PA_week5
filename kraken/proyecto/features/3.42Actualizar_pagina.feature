@user1 @web
  Scenario: Actualizar pagina y publicarla
    Given I navigate to page "<URL342>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I click on element having css selector "a[href*='pages']"
	Then I click on element having css selector "li[class*='gh-list-row gh-posts-list-item ember-view']"
	Then I enter "Contenido update" into input field having css selector "p"
	Then I enter "Contenido update 1" into input field having css selector "p"
	Then I enter "Contenido update 2" into input field having css selector "p"
	Then I enter "TITULO POST update KRAKEN" into input field having css selector "textarea"
	Then I click on element having css selector "div[class*='gh-btn']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon gh-btn-green ember-view']"
	Then I click on element having css selector "a[href*='pages']"
	
	