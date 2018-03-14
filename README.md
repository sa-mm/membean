# Membean React Code Test

## Setup:
This is just an out of the box Create-React-App. You can install all dependencies by running `yarn` after cloning
and using `yarn start` to run the app. `yarn test` will run the unit tests.

## Instructions:
1. Write an application that calls the mock api and uses *redux api middleware* to persist it in state.
2. Wire the `App.js` component up to your Redux store somehow and display all svgs returned in the mock API call on the page.
3. Add some events on the svgs so that when you hover or click on them it displays the hex color code instead of the the svg.
4. Please write as many unit tests as you think are necessary for the code you write. 

Notes:
- `fetch()` is mocked on the window. You use it the same as normal except you do not need to call .json() on the response
object to get the response body, the respone body is returned by default. Please look at `/src/api/mockFetch.js` to see
the implementation and the json being returned.
- Please stick to using the built in Jest/Enzyme test tools for all your unit tests.

Bonus:
- Randomize the color of every React svg so that every time you reload the page you get different colored logos.