

// Kelvin Temperature Converter


// This program will convert a value in kelvin to fahrenheit and celcius


/* Some key elements used in this program are: If/Then/Else statements, variables, prompts, console.log statements,
math functions, and commented code */


// Beggining of Program


// Beginning of the isKelvin function

function isKelvin() {
  
  kelvin = prompt ("What value in kelvin would you like to convert?", 293);
  celcius = Math.floor(kelvin - 273);
  fahrenheit = Math.floor(celcius * (9/5) + 32);

  if (isNaN(kelvin) || kelvin < 0 || kelvin === true || kelvin === false){ /* If statement to check 
  if the kelvin variable is a number, and running if it is not a number */

    alert ("Please input a realistic value for kelvin. '" + kelvin + "' is not a valid input. Try again."); // Running error message if kelvin variable is not a number
    console.log ("Error! Please try again!");

  } else if (isNaN === false || kelvin > 0 || kelvin !== true || kelvin !== false) { // Else If part of statement to run code that outputs temperature values stored in variables
  
    console.log ("The temperature is " + kelvin + " degrees kelvin today!"); // Outputs kelvin temperature
    console.log (''); // Printing a blank line
    console.log ("The temperature is " + celcius + " degrees celcius today!"); // Outputs celcius temperature
    console.log (''); // Printing a blank line
    console.log ("The temperature is " + fahrenheit + " degrees fahrenheit today!"); // Outputs fahrenheit temperature
	
  } else { // Else part of statement to display an error in the input
	
    alert ("Error! Please try again!")
    console.log ("Error! Please try again!"); // Error message being printed

  } // End of else statement
} // End of the isKelvin function


// Beginning of the isCelcius function
function isCelcius() {

  celcius = prompt ("What value in celcius would you like to convert?", 20);
  kelvin = Math.floor(celcius - (-273));
  fahrenheit = Math.floor(celcius * (9/5) + 32);

  if (isNaN(celcius) || celcius < 0 || celcius === true || celcius === false){ /* If statement to check 
  if the kelvin variable is a number, and running if it is not a number */

    alert ("Please input a realistic value for celcius. '" + celcius + "' is not a valid input. Try again."); // Running error message if kelvin variable is not a number
    console.log ("Error! Please try again!");

  } else if (isNaN ()=== false || celcius !== true || celcius !== false) { // Else If part of statement to run code that outputs temperature values stored in variables

    console.log ("The temperature is " + kelvin + " degrees kelvin today!"); //     Outputs celcius temperature
    console.log (''); // Printing a blank line
    console.log ("The temperature is " + celcius + " degrees celcius today!"); // Outputs kelvin temperature
    console.log (''); // Printing a blank line
    console.log ("The temperature is " + fahrenheit + " degrees fahrenheit today!"); //       Outputs fahrenheit temperature
	
  } else { // Else part of statement to display an error in the input
	
    alert ("Error! Please try again!");
    console.log ("Error! Please try again!"); // Error message being printed

  } // End of else statement
} // End of the isCelcius function


// Beginning of the isFahrenheit Function
function isFahrenheit() {

  fahrenheit = prompt ("What value in fahrenheit would you like to convert?", 68);
  celcius = Math.floor(fahrenheit - 32 * (5/9));
  kelvin = Math.floor(celcius - (-273));
  
  if (isNaN(fahrenheit) || fahrenheit < 0 || fahrenheit === true || fahrenheit === false){ /* If statement to check 
  if the kelvin variable is a number, and running if it is not a number */

    alert ("Please input a realistic value for fahrenheit. '" + fahrenheit + "' is not a valid input. Try again."); // Running error message if kelvin variable is not a number
    console.log ("Error! Please try again!");

  } else if (isNaN = false || fahrenheit !== true || fahrenheit !== false) { // Else If part of statement to run code that outputs temperature values stored in variables

    console.log ("The temperature is " + kelvin + " degrees kelvin today!"); // Outputs fahrenheit temperature
    console.log (''); // Printing a blank line
    console.log ("The temperature is " + celcius + " degrees celcius today!"); // Outputs celcius temperature
    console.log (''); // Printing a blank line
    console.log ("The temperature is " + fahrenheit + " degrees fahrenheit today!"); // Outputs kelvin temperature
	
  } else { // Else part of statement to display an error in the input
	
    alert ("Error! Please try again!"); // Error message being printed
    console.log ("Error! Please try again!");

  } // End of else statement
} // End of the isFahrenheit function




// Variables being declared
var kelvin; // Creating an empty variable called kelvin
var celcius; // Creating an empty variable called celcius
var fahrenheit; // Creating an empty variable called fahrenheit
var temperatureType;



// Beginning of Main 

temperatureType = prompt ("What measurement of temperature (kelvin, celcius, fahrenheit) would you like to convert?");

console.log ("Welcome to Mad Scientist Kelvin's Temperature Converter!"); // Printing a welcome message
console.log (''); // Printing a blank line


if ((temperatureType === "kelvin")||(temperatureType === "Kelvin")){

  isKelvin();

} else if ((temperatureType === "celcius") || (temperatureType === "Celcius")) {

  isCelcius();

} else if ((temperatureType === "fahrenheit")||(temperatureType === "Fahrenheit")) {

  isFahrenheit();

} else {

  alert ("Please input a real type of temperature.");
  console.log("Please input a real type of temperature.");

}

// End of Main


console.log (''); // Printing a blank line
console.log ("Thank you for using Mad Scientist Kelvin's Temperature Converter App!"); // Thanking user for using Mad Scientist Kelvin's App



// End of Program
// Written by Walker Rout

