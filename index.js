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

//Calculations
const newDistance = initialDistance + velocity * time; //calcultes new distance
const remainingFuelAmount = fuelBurnRate * time; //calculates remaining fuel
const newVelocity = calcNewVel(acceleration, velocity, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
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
  return newVelocity + (acceleration * time);
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
