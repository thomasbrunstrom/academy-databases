# MySQL Workbench intro

## 1. Install MySQL

In the pptx for the Database intro there are slides that explain how to install MySQL and MySQL Workbench. Use that to install MySQL Server and MySQL Workbench.

## 2. Run some SQL-Queries

1. Fetch all data from the city table.
1. Fetch all data from Sweden (CountryCode="SWE") in the city table.
1. Fetch the CityName and Population for Sweden in the city table.
1. Get the number of countries there is in the database (schema), have a look at the closing slides from the lecture.
1. Sum the total of people registered in the world database (schema) and call the column for WorldPopulation.
1. Sum how many people there is in Asia.
1. Make a rising ranked list of all countries and their area size, sorted by area. (Try to figure out which columns and tables that are needed)
1. Make a ranked list of countries by declining life expectancy and rising population
1. Make a list of countries by number of people per square kilometer. (Hint: Look for a table containing population and km2 to get started. Use mathematical operators in the query.)
1. List country code, name and independence year, sorted by year and thereafter name, for all the countries that have a independence year. (Hint: something with NULL).

## 3. Run some more SQL-Queries

1. Fetch all countries that have 'W' in their country code.
1. Fetch all countries that the name starts with 'N', 'O' or 'P'. Sort them by name.
1. Retrieve all language data for countries that have an official language spoken by 99% or more of the country's population. Sort by descending percentage, then alphabetically by language.
1. Retrieve country code, name and continent for all countries in America (both North America and South America). Sort alphabetically by country code.
1. Retrieve the number of countries per continent for all continents.
1. Get the continent and the number of countries in this continent, for those continents that have 30 or more countries. Sort by number of countries in descending order.
1. Summarizes what the total population per continent (ie for all continents) is, sorted by population (descending order).
1. Double check the answer from the problem above by summing the numbers per continent by hand (for example with Windows calculator), and then compare them with a new query that retrieves the sum of the world's population.

## 4.
