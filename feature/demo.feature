Feature: Validating Calculator App

Scenario: Calculator Add functionality testing

Given I will navigate to calc page
When I add two numbers "41" and "19"
Then The output should be "13"

Given I will navigate to "Calc" page
When I add two numbers "4" and "9"
Then The output should be "15"

Scenario: Navigating to angular js website

Given I will navigate to "Angularjs" page
When I click the head page
And I will navigate to the Angular page
Then I will enter "helloz" into the search page