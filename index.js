// Write your code here!
// index.js

// Remove the 'main#main' node from the DOM
document.querySelector('main#main').remove();

// Create a new <h1> element with the id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text inside the <h1> element
newHeader.innerHTML = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body
document.body.appendChild(newHeader);
