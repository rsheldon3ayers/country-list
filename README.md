# Country List

This is a frontend app built on React and React Router.  It consumes the [REST Countries](https://restcountries.com/#api-endpoints-v2-all) API.

To test the project clone and then cd into the `country-list` directory.

Run

## `npm install`

then 
### `npm start`

A list of country flags will display.  When the user hovers over the flag it will flip around and display the country information.  

Clicking the flags will load a new page with the country information.  

## TODOS

- Fix the card flip animation. The simultaneous movement is disorienting for the user. 

- Some of the parameters return more than one country.  If I had more time I would filter out matches that weren't a strict match. Probably compare the `names.common` value with the parameter and only render exact matches.  `Example: Romania loads the Oman info.`  