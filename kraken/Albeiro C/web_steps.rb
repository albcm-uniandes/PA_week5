if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end

  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end

  # Modified by Albeiro Cuadrado:
  
  When(/^I'm into the dashaboard admin$/) do
    sleep 1
    @driver.current_url() == 'http://localhost:2368/ghost/#/site'
  end

  Given(/^I'm logged as "(.*?)$/) do |text|
    name = @driver.find_element(css: '.gh-user-name')
    name = text
  end

  Then(/^I should see no results found/) do
    @driver.find_element(css: '.ember-power-select-option--no-matches-message')
  end

  Then(/^I'm into "(.*?) View $/) do |text|
    sleep 1
    @driver.current_url() == text
  end

end
