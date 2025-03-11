/**
 * Toggle Handling Function:
 * This is my function that is going to perform the toggle
 * 
 * If the text is in the display case
 *   - Update the text to hidden
 *   - Update the src of the image to be 'plus'
 * else
 *   - Update the text to display case
 *   - Update the src of the image to be 'minus'
 */

function toggleText(button, text) {
    // Check if the text is currently visible
    if (text.className == "faq-dynamic-row-content_show") {
      // If visible, hide the text
      text.className = "faq-dynamic-row-content_hidden";
      // Update the button icon to "plus" (indicating expand)
      button.setAttribute("src", "./assets/images/icon-plus.svg");
    } else {
      // If hidden, show the text
      text.className = "faq-dynamic-row-content_show";
      // Update the button icon to "minus" (indicating collapse)
      button.setAttribute("src", "./assets/images/icon-minus.svg");
    }
  }

  /**
 * Loop to go from 1 to 4 -> Modified in the future
 * 
 * This loop iterates over 4 sets of buttons and text elements.
 * For each iteration, it grabs the button and text elements,
 * adds an event listener to the button, and calls the `toggleText`
 * function when the button is clicked.
 */
for (let i = 1; i <= 4; i++) {
    // Get the button element with the ID `button-${i}`
    // For example, when i = 1, this will get the element with ID `button-1`
    const button = document.getElementById(`button-${i}`);
  
    // Get the text element with the ID `text-${i}`
    // For example, when i = 1, this will get the element with ID `text-1`
    const text = document.getElementById(`text-${i}`);
  
    // Add a click event listener to the button
    // When the button is clicked, the arrow function will be executed
    button.addEventListener("click", () => {
      // Call the `toggleText` function, passing the button and text elements as arguments
      toggleText(button, text);
    });
  }