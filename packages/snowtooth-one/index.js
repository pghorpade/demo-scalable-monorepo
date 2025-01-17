import { calculateHikingTime } from '@snowtooth-mountain/snowtooth-two';
calculateHikingTime(10, 3);
function CalculateElevation(feet){
  console.log('Calculating elevation...');
  const meters = feet * 0.3048;
  console.log('Elevation calculated', meters);
  return(Math.round(meters));
}
let verticaleFeet = 120000;

console.log(`The resort has an elevation of ${CalculateElevation(verticaleFeet)} meters`);