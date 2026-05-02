# Feedback Form Application

## Description
This project is an interactive feedback form built using HTML, CSS, and JavaScript. It allows users to submit feedback, validates input fields, and dynamically displays submitted responses on the page.

The goal of this project is to demonstrate form handling, validation, DOM manipulation, and user interaction.

## Features
- Real-time character count for comments
- Form validation for required fields
- Dynamic display of submitted feedback
- Tooltip guidance for form inputs
- Click and keyboard interactions for tooltip control
- Styled feedback cards for submitted entries
- Clean and responsive UI design

## Technologies Used
- HTML5  
- CSS3  
- JavaScript  

## File Structure
- `index.html` – Form structure and layout  
- `style.css` – Styling, layout, and responsiveness  
- `script.js` – Form logic, validation, and interactivity  

## Functionality

### Form Validation
- Ensures all fields (name, email, comments) are completed  
- Displays error messages if inputs are missing  

### Character Counter
- Updates in real time as the user types in the comments field  

### Tooltip System
- Displays helpful hints when hovering over input fields  
- Hides on mouseout, Escape key, or clicking outside the form  

### Feedback Display
- Submitted feedback is dynamically added to the page  
- Each submission is shown as a styled card including:
  - Name  
  - Email  
  - Comment  

## Key Functions

### `validateForm()`
Checks if all required fields are filled and displays error messages.

### `appendFeedback(name, email, comment)`
Creates and displays a new feedback card in the UI.

## How to Run
1. Download or clone the repository  
2. Open `index.html` in a web browser  
3. Fill out the form and submit feedback  

## Concepts Demonstrated
- DOM manipulation  
- Event handling  
- Form validation  
- Dynamic content rendering  
- CSS layout and responsiveness  

## Notes
- Front-end only project (no backend)  
- Data is not stored permanently  

## Author
Kyana Hay
