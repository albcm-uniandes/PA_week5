Feature: Shared board connection
  
  @user1 @web
    Scenario: Editar tag y publicarlo
    Given I navigate to page "<<URL342>>"
	Then I enter "<USERNAME>" into input field having id "ember8"
	Then I enter "<PASSWORD>" into input field having id "ember10"
	Then I click on element having css selector "button#ember12"
	Then I click on element having css selector "a[href*='tags']"
	Then I click on element having css selector "li[class*='gh-list-row gh-tags-list-item ember-view']"
	Then I enter "TAG update 7" into input field having id "tag-name"
	Then I enter "TAG SLUG update 7" into input field having id "tag-slug"
	Then I enter "TAG DE PRUEBA update 7" into input field having id "tag-description"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-expand']"
	Then I enter "META TITULO update TAG 7" into input field having id "meta-title"
	Then I enter "META DESCRIPCION update TAG " into input field having id "meta-description"
	Then I click on element having css selector "button[class*='gh-btn gh-btn-primary gh-btn-icon ember-view']"
	Then I click on element having css selector "a[href*='tags']"
		
	
	
	