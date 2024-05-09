/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = {value:10000, unit: "km/h"}; // velocity (km/h)
const acceleration = {value:3, unit:"m/s^2"}; // acceleration (m/s^2)
const time = {value:3600, unit:"seconds"}; // seconds (1 hour)
const initialDistance ={value:0, unit: "km"}; // distance (km)
const remainingFuel = {value:5000, unit: "kg"}; // remaining fuel (kg)
const fuelBurnRate = {value:0.5, unit: "kg/s"}; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
// Function to calculate new velocity based on acceleration
function calcNewVel(velocity, acceleration, time) {
  if (
    typeof velocity !== "number" ||
    typeof acceleration !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error(
      "Invalid input. Please insert numerical values for velocity, acceleration, and time."
    );
  }
  //converting m/s^2 to km/h^2
  const convertedAcceleration = acceleration * ((3600/1000)*(3600));
  const newVelocity = velocity + convertedAcceleration * (time/3600);
  
  return newVelocity;
}

if (velocity.unit !== "km/h") throw new Error("Invalid units! Please use 'km/h' for velocity");
if (acceleration.unit !== "m/s^2") throw new Error("Invalid units! Please use 'm/s^2' for acceleration");
if (time.unit !== "seconds") throw new Error("Invalid units! Please use 'seconds' for time");
if (initialDistance.unit !== "km") throw new Error("Invalid units! Please use 'km' for initial distance");
if (remainingFuel.unit !== "kg") throw new Error("Invalid units! Please use 'kg' for remaining fuel");
if (fuelBurnRate.unit !== "kg/s") throw new Error("Invalid units! Please use 'kg/s' for fuel burn rate");


//Calculations
const newVelocity = calcNewVel(velocity.value, acceleration.value, time.value).toFixed(0); //calculates new velocity based on acceleration
const newDistance = initialDistance.value + velocity.value * (time.value / 3600); //calcultes new distance
const remainingFuelAmount = remainingFuel.value - fuelBurnRate.value * time.value; //calculates remaining fuel

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAmount} kg`);
