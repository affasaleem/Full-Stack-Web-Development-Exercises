// https://stanford.edu/~cpiech/karel/ide.html
/*my method*/

function main(){
 
 goInCircle();
 goInCircle();
 goInCircle();
 goInCircle();
 
}

function goInCircle() {
   move();
   turnLeft();
   move();
   turnRight();
   
   }

/*from teacher's medhod*/

function main(){
   
moveFourTimes();
turnLeft();
moveFourTimes();

}

function moveFourTimes(){

move();
move();
move();
move();

}


/** diagonalMoveAndBeeper challenge*/

function main() {
    firstRow();
    upLeft();

    secondRow();
    upRight();

    secondRow();
    upLeft();

    secondRow();
    upRight();

    firstRow();
}

function firstRow() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function secondRow() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function upLeft() {
    turnLeft();
    move();
    turnLeft();
}

function upRight() {
    turnRight();
    move();
    turnRight();
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}




























