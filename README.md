# Product Dashboard (Vanilla JavaScript)

## Description
This project is a simple product dashboard built using vanilla JavaScript. It fetches product data from an external API and displays a limited set of products dynamically on the page.

The purpose of this project is to demonstrate working with asynchronous JavaScript, API data, and DOM manipulation.

## API Used
Data is retrieved from:
https://www.course-api.com/javascript-store-products

## Functionality
- Fetches product data from an external API
- Uses both:
  - Promise-based `.then()` syntax
  - `async/await` syntax
- Displays the first 5 products
- Each product includes:
  - Name
  - Image
  - Price (formatted to dollars)
- Handles errors if the API request fails

## Key Functions

### `fetchProductsThen()`
Uses `.then()` and `.catch()` to fetch and process data.

### `fetchProductsAsync()`
Uses `async/await` to fetch and process data.

### `displayProducts(products)`
- Selects the product container from the DOM
- Clears existing content
- Creates product cards dynamically
- Displays name, image, and price

### `handleError(error)`
Logs errors to the console if something goes wrong.

## How to Run
1. Clone or download the repository
2. Open `index.html` in your browser
3. Products will automatically load on page open

## Concepts Demonstrated
- Fetch API
- Promises (`.then()` / `.catch()`)
- Async/Await
- Error handling
- DOM manipulation
- Array methods (`forEach`, `slice`)
- Working with objects

## Notes
- Only the first 5 products are displayed for simplicity
- Prices are converted from cents to dollars
- No external libraries or frameworks are used

## Author
Kyana Hay
