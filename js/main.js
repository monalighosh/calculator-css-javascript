
var screen = document.getElementById("screen");

// Variable to store all the inputs with type button
var buttonNodes = document.querySelectorAll("input[type=button]"); 

// Function to update the screen value
function updateValue(){
	screen.value += this.value;
}

// Function to clear the screen value
function clearValue(){
	screen.value = "";
}

// Function to delete the last character from the screen
function delValue(){
	screen.value = screen.value.replace(screen.value.charAt(screen.value.length-1), "");
}

// Function to perform the calculations
function equalValue(){
	var calData = screen.value;
	screen.value = eval(calData);
}

// Loops through buttonNodes list array
for(var i = 0; i < buttonNodes.length; i++){ 
	// Checks if an array element value id DEL, if yes, then apply a function to del the last character from the screen
	if(buttonNodes[i].value === "DEL"){ 
	buttonNodes[i].addEventListener("click", delValue);
	// Checks if an array element value id CLEAR, if yes, then apply a function to clear the screen value
   } else if(buttonNodes[i].value === "CLEAR"){
   	buttonNodes[i].addEventListener("click", clearValue);
   	// Checks if an array element value id CLEAR, if yes, then apply a function to perform the calculations
   } else if(buttonNodes[i].value === "="){
   	buttonNodes[i].addEventListener("click", equalValue);
   	// Else apply a function to update the screen value
   } else {
   	buttonNodes[i].addEventListener("click", updateValue);
   }
}





