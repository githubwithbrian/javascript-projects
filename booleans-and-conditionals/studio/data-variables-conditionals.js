let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
if (astronautCount) {
    console.log("is no greater than 7");
}
let astronautStatus = "ready";
if (astronautStatus){
    console.log("is ready");
}
let averageAstronautMassKg = 80.7;
let crewMassKG = astronautCount * averageAstronautMassKg;
let fuelMassKg = 780000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
if (totalMassKg){
    console.log("is less than the maximumMassLimit");
}
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
if (fuelTempCelsius){
    console.log("s no less than -300 OR no greater than -150");
}
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
if (fuelLevel){
    console.log("is sat 100%");
}
let weatherStatus = "clear";
if (weatherStatus){
    console.log("is clear");
}
let preparedForLiftOff = "true";
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7)

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
