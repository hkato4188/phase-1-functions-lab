function distanceFromHqInBlocks(customer){
    let blocks = customer - 42;
    return blocks < 0 ? (blocks * -1) : blocks;
}

function distanceFromHqInFeet(customer){
    return 264 * distanceFromHqInBlocks(customer);
}

function distanceTravelledInFeet(start, destination){
    let blocks = start - destination;
    return blocks < 0 ? (blocks * -264) : blocks * 264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance < 400){
        return 0;
    }else if (distance > 400 && distance < 2000){
        return (distance - 400) * .02
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}