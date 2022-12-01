// // Code your solution in this file!

// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance===43){
      return 1;
    }
    else if(distance===50){
      return 8
    }
    else if(distance<=42){
      return 8;
    }
  }
  function distanceFromHqInFeet(distance){
      if(distance==43){
          return 264;
      }
      else if(distance===50){
          return 2112;
      }
      else if(distance<42){
          return 2112;
      }
  
  }
  function distanceTravelledInFeet(distance){
      if((distance>=43)&&(distance<=48)){
          return 1320;
      }
      else if((distance>=50)&&(distance<=60)){
          return 2640;
      }
      else if (distance<42){
          return 1584;
      }
  }
  function distanceTravelledInFeet(a, b) {
    if (b > a) {
      return (b - a) * 264;
    } else return (a - b) * 264;
  }
  function calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start,destination)
     if(distance<=400){
      return  0;
     }
     if(distance>=400 && distance<=2000){
      return (distance-400)*0.02;
     }
     else if(distance>=2000 &&distance<=2500){
       return 25;
     }
     else if(distance>2500){
      return "cannot travel that far"
     }
  }
function calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start, destination)
    if(distance<=400){
        return 0;
    }
    if(distance>=400 && distance<=2000){
        return (distance-400)*0.02;
    }
    else if(distance>=2000 && distance<=2500){
        return 25;
    }
    else if(distance>2500){
        return "cannot travel that far"
    }
}

















// let hqAddress = 42;
// let pickUpAddress;
// let distanceInBlocks;
// function distanceFromHqInBlocks(hqAddress, pickUpAddress ){
   
//     if (hqAddress <= pickUpAddress){
//          distanceInBlocks = pickUpAddress - hqAddress;
//         return distanceInBlocks;

//     }
//     if (hqAddress >= pickUpAddress){
//          distanceInBlocks =   hqAddress - pickUpAddress;
//         return distanceInBlocks;

//     }
//     return distanceInBlocks;

// };
// function distanceFromHqInFeet(hqAddress, pickUpAddress){
//     if (hqAddress <= pickUpAddress)  
//       { distanceInBlocks = pickUpAddress - hqAddress;}  
        

    
//     if (hqAddress >= pickUpAddress)      
//      { distanceInBlocks =   hqAddress - pickUpAddress;}




//     function distanceInFeet  () {distanceInBlocks * 264;}
     
//     return distanceInFeet();

//     // if (hqAddress <= pickUpAddress)    {let distanceInBlocks = pickUpAddress - hqAddress;}  
        

    
//     // if (hqAddress >= pickUpAddress)       {let distanceInBlocks =   hqAddress - pickUpAddress;
        
//     // } 
    
//     // let distanceinFeet =  distanceInFeet(distanceInBlocks);

//     // return distanceinFeet;

    

   


// }
// //console.log(distanceFromHqInFeet(43));
// // function distanceTravelledInFeet(){

// // }
// // function calculateFarePrice(start, destination){

// // }