// example input ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// example output "Michael is going to buy lunch today!"

function whospaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}