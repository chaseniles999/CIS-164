"use strict";

const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
    $("#degrees_prompt").textContent = label1Text;
    $("#degrees_computed_label").textContent = label2Text;
    $("#degrees_computed").value = ""; // Clear the computed value
    $("#message").textContent = ""; // Clear any error messages
};

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
    let enteredValue = parseFloat($("#degrees_entered").value);

    // Validate the input
    if (isNaN(enteredValue)) {
        $("#message").textContent = "Please enter a valid number.";
        return;
    }

    // Determine the conversion type and perform the conversion
    let result;
    if ($("#to_celsius").checked) {
        result = calculateCelsius(enteredValue);
    } else {
        result = calculateFahrenheit(enteredValue);
    }
    
    $("#degrees_computed").value = result.toFixed(2) + "°"; // Display rounded result
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});
