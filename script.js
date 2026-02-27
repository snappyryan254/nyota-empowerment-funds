'use strict';

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Process the data (example)
    console.log('Form submitted:', Object.fromEntries(formData));
    // Call M-Pesa payment function
    processPayment(formData);
}

// Function to process M-Pesa payment
function processPayment(formData) {
    // Example M-Pesa integration logic here
    console.log('Processing M-Pesa payment with data:', formData);
    // On success, show confirmation message
    showConfirmationMessage();
}

// Function to display a confirmation message
function showConfirmationMessage() {
    alert('Payment successful! Thank you for your submission.');
}

// Example of adding event listener to a form
const form = document.getElementById('paymentForm');
if (form) {
    form.addEventListener('submit', handleFormSubmission);
}