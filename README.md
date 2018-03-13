# Membean React Code Test

## Setup:
This is just an out of the box Create-React-App. You can install all deps by running `yarn` after cloning
and using `yarn start` to run the app. `yarn test` will run the unit tests.

## Instructions:
1. We have mocked `fetch` on the window. Please call it somewhere in the component as it's mocked response contains the 
svgs you will need to display.
2. Display all svgs returned in the mock API call on the page.
3. Add some events on the svgs so that when you hover or click on them it displays the hex color code instead of the the svg.
4. Please write as many unit tests as you think are necessary for the code you write. Please stick to using the built in 
Jest/Enzyme test tools for all your unit tests.

Bonus:
- Randomize the color of every React svg so that every time you reload the page you get different colored logos.