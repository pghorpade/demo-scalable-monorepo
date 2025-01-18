import { calculateHikingTime } from '@snowtooth-mountain/snowtooth-two';
calculateHikingTime(10, 3);
export function CalculateElevation(feet){
 
  const meters = feet * 0.3048;
  
  return(Math.round(meters));
}
let verticaleFeet = 120000;

console.log(`The resort has an elevation of ${CalculateElevation(verticaleFeet)} meters`);