// script.js

// Interactive features for the Artista Coffee Shop website

// Function to update the current date and time
function updateDateTime() {
    const currentDateTime = new Date().toUTCString();
    document.getElementById('datetime').innerHTML = currentDateTime;
}

// Function to handle coffee selection
function selectCoffee(coffeeType) {
    alert('You selected: ' + coffeeType);
}

// Set interval to update date and time every second
setInterval(updateDateTime, 1000);

// Event listeners for coffee buttons
const coffeeButtons = document.querySelectorAll('.coffee-button');
coffeeButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectCoffee(button.dataset.coffee);
    });
});
