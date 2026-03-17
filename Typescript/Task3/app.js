var city = "Pune";
var temperature = 25;
var isRaining = false;
function weatherreport(city, temperature, isRaining) {
    console.log("In ".concat(city, ", the temperature is ").concat(temperature, " degrees and it is ").concat(isRaining ? 'raining' : 'not raining'));
}
weatherreport(city, temperature, isRaining);
