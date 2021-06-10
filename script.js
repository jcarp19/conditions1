let actualTemp = 80;
let desiredTemp = 74;

if (actualTemp > desiredTemp) {
    console.log("Run A/C")
} else if (actualTemp < desiredTemp) {
    console.log("Run Heat")
} else {
    console.log("Standby")
};



console.log("Extended Challenge")
let tempCelsius = 100;
let targetUnit = "F";

const choice = prompt("Select a temperature unit to convert(C, F, or K)")
switch (choice) {
    case "C":
        console.log("Your converted temperature is, " + tempCelsius + " (no conversion needed)");
        break;
    case "F":
        console.log("Your converted temperature is, " + ((tempCelsius * (9/5)) + 32));
        break;
    case "K":
        console.log("Your converted temperature is, " + (tempCelsius + 273.15));
        break;
        
}