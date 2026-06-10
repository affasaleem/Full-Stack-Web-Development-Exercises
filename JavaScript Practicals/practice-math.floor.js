function getMilk(money, costPerBottle) {
 console.log("leaveHouse");
 console.log("moveRight");
 console.log("moveRight");
 console.log("moveUp");
 console.log("moveUp");
 console.log("moveUp");
 console.log("moveUp");
 console.log("moveRight");
 console.log("moveRight");
 
 console.log("buy " + calcBottles(money, 2.5) + " bottles of milk");
 
 console.log("moveLeft");
 console.log("moveLeft");
 console.log("moveDown");
 console.log("moveDown");
 console.log("moveDown");
 console.log("moveDown");
 console.log("moveLeft");
 console.log("moveLeft");
 console.log("enterHouse");

 //return money % 1.5; //reminder of this division.

 return calcChange(money, 2.5);
}

//var change = getMilk(4); 
//console.log("change: " + change);

function calcBottles(startingMoney, costPerBottle) {
  var numberoFBottles = Math.floor(startingMoney / costPerBottle);
 return numberoFBottles;
}

function calcChange (startingAmount, costPerBottle) {
 var change = startingAmount % costPerBottle;
 return change;
}
console.log("Hello your " + getMilk(10, 3) + " change");