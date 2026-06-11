prompt("your name?");
prompt("your crushe's name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
    alert("loveScore: " + loveScore + "%" + " you love each other like  romio & juliat");
} 
if (loveScore > 30 && loveScore <= 70) {
        alert("loveScore: " + loveScore + "%");
}

if (loveScore <= 30) {
    alert("loveScore: " + loveScore + "%" + " you go together like oil and water");
}