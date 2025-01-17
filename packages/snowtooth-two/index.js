function calculateHikingTime(trailLength, avgSpeed) {
  return Math.round(trailLength / avgSpeed);
}

let length = 10;
let speed= 3;

console.log(`At an average speed of ${speed} mph, it will take you ${calculateHikingTime(length, speed)} hours to complete a ${length} mile hike.`);