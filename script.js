function toFahrenheit(celsius) {
 // Write your code here
	if(celsius > -273.15°C ){
		return (32 + celsius );
	}	
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
