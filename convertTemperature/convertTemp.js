//this function is very basic and thus is not idiot-proof
convertTemp = function(celsius) {
    return Math.floor(9/5 * celsius + 32);
}
//Math.floor is not really needed except to avoid messy decimals
console.log(convertTemp(6));
console.log(convertTemp(-40));
//changed variable name from c to celsius for clarity
//see readme