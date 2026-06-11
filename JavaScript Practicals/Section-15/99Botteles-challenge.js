var numberofBottles = 99;
while (numberofBottles >= 0) {
    var bottleWorld = "bottle";
    if (numberofBottles === 1) {
        bottleWorld = "bottle";
    } 
    console.log(numberofBottles + " " + bottleWorld + " of beer on the wall");
    console.log(numberofBottles + " " + bottleWorld + " of beer");
    console.log("Take one down, pass it around");
    numberofBottles--;
    console.log(numberofBottles + " " + bottleWorld + " of beer on the wall");
}