/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

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
  const convertedAcceleration = acceleration * (3600/1000);
  return velocity + convertedAcceleration * (time);
}

//Calculations
const newVelocity = calcNewVel(velocity, acceleration, time).toFixed(0); //calculates new velocity based on acceleration
const newDistance = initialDistance + velocity * (time / 3600); //calcultes new distance
const remainingFuelAmount = remainingFuel - fuelBurnRate * time; //calculates remaining fuel

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAmount} kg`);
