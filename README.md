This is a minimal implementation of a HTML form that submits using both the \_self and \_blank target attributes as well as the get and post methods to reproduce potential browser bugs when opening a post request in a new tab.
A browser that can properly forward postBody data to the new tab should open a new tab with a success page for the first form.
All browsers should be able to open the second form submit in the current tab.
The bottom 2 forms illustrate the same behavior as the top2 but with a get request.
Get requests should fail and be easily distinguishable from the successful post requests.

An electron browser patched to fix https://github.com/electron/electron/issues/23780 should exhibit the same behavior with the 1st and 2nd form. (The success page should open in the current tab)

To test:

- clone this repo
- `npm install`
- `npm run start`
- open http://localhost:8080 in the browser you would like to test
