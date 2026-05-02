# Product Dashboard (Vanilla JavaScript)

## Description
This project is a simple product dashboard built using vanilla JavaScript. It fetches product data from an external API and displays a limited set of products dynamically on the page.

The purpose of this project is to demonstrate working with asynchronous JavaScript, API data, DOM manipulation, and basic UI styling.

## API Used
Data is retrieved from:  
https://www.course-api.com/javascript-store-products

## Features
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
- Styled interface with a clean and modern layout  
- Responsive design for different screen sizes  

## Technologies Used
- HTML5  
- CSS3  
- JavaScript (Vanilla JS)

## File Structure
- `index.html` – Main structure of the page  
- `style.css` – Styling for layout, components, and responsiveness  
- `script.js` – JavaScript logic for fetching and displaying products  

## Key Functions

### `fetchProductsThen()`
Uses `.then()` and `.catch()` to fetch and process API data.

### `fetchProductsAsync()`
Uses `async/await` to fetch and process API data.

### `displayProducts(products)`
- Selects the product container from the DOM  
- Clears existing content  
- Creates product cards dynamically  
- Displays product name, image, and price  

### `handleError(error)`
Logs errors to the console if something goes wrong.

## How It Works
1. The application sends a request to the API.  
2. It checks if the response is valid.  
3. The data is converted into JSON format.  
4. The first five products are extracted and displayed.  
5. If an error occurs, it is handled and logged.

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
- Basic CSS layout and responsiveness  

## Notes
- Only the first 5 products are displayed for simplicity  
- Prices are converted from cents to dollars  
- No external libraries or frameworks are used  
- Styling enhances usability and visual presentation  

## Author
Kyana Hay
