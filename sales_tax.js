'use strict';

// Helper function to get DOM element
function $(selector) {
    return document.querySelector(selector);
  }
  
  // Main function to process entries
  function processEntries() {
    let subtotal = parseFloat($('#subtotal').value);
    let taxRate = parseFloat($('#taxRate').value);
  
    // Data validation
    if (subtotal <= 0 || subtotal >= 10000) {
      alert("Subtotal must be > 0 and < 10000");
      return;
    }
    if (taxRate <= 0 || taxRate >= 12) {
      alert("Tax Rate must be > 0 and < 12");
      return;
    }
  
    // Calculations
    let salesTax = subtotal * (taxRate / 100);
    let total = subtotal + salesTax;
  
    // Display results
    $('#salesTax').value = salesTax.toFixed(2);
    $('#total').value = total.toFixed(2);
  
    // Move cursor to Subtotal field
    $('#subtotal').focus();
  }
  
  // Clear all fields
  function clearFields() {
    $('#subtotal').value = "";
    $('#taxRate').value = "";
    $('#salesTax').value = "";
    $('#total').value = "";
  
    // Move cursor to Subtotal field
    $('#subtotal').focus();
  }
  
  // DOM Content Loaded event
  document.addEventListener("DOMContentLoaded", function() {
    $('#calculate').addEventListener('click', processEntries);
    $('#clear').addEventListener('click', clearFields);
  
    // Additional click handlers for input fields
    $('#subtotal').addEventListener('click', function() {
      this.value = "";
    });
    $('#taxRate').addEventListener('click', function() {
      this.value = "";
    });
  
    // Move cursor to Subtotal field when the application starts
    $('#subtotal').focus();
  });