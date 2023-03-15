// // Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
  let scruberHq = 42;
  let numberOfBlocks;
  (Number.isInteger(pickUpLocation) == true) ? (
    (pickUpLocation >= scruberHq) ? (numberOfBlocks = pickUpLocation - scruberHq) : (numberOfBlocks = scruberHq - pickUpLocation)
  ):
  (false);
  console.log (numberOfBlocks);
  return numberOfBlocks;
}
distanceFromHqInBlocks(60);

function distanceFromHqInFeet (pickUpLocation) {
  const distanceInFeet = distanceFromHqInBlocks(pickUpLocation) * 264 ;
  return distanceInFeet;
}
function distanceTravelledInFeet (start , destination){
  let numberOfBlocks;
  (Number.isInteger(destination) == true) ? (
    (destination >= start) ? (numberOfBlocks = destination - start) : (numberOfBlocks = start - destination)
  ):
  (false);
  let distanceInFeet = numberOfBlocks * 264 ;
  return distanceInFeet;   
}
function calculatesFarePrice(start , destination){
  let distance = distanceTravelledInFeet(start , destination);
  let fare;
  if (distance <= 400){
    fare = 0;
    return fare;    
  } else if (distance > 400 && distance <= 2000){
    let distanceToCharge = distance - 400;
    fare = (distanceToCharge * 2)/100;
    console.log(fare);
    return fare;
  }else if (distance > 2000 && distance <=2500){
    fare = 25;
    return fare;
  }else {
    return "cannot travel that far";
  }

}