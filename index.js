// Code your solution in this file!
function distanceFromHqInBlocks(block){
if (42 > block){
    return 42 - block;
} else if (42 < block){
    return block - 42;
}

}
distanceFromHqInBlocks()

function distanceFromHqInFeet(block){
return distanceFromHqInBlocks(block) * 264;
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
  if (start < destination){
    return (destination * 264) - (start * 264)
} else if (start > destination){
    return (start * 264) - (destination * 264)
 }
}
distanceTravelledInFeet()

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    } if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500){
        return 25;
    } if (distanceTravelledInFeet(start, destination) > 2500){
        return 'cannot travel that far'
    }
}
calculatesFarePrice()