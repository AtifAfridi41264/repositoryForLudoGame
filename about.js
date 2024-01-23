
function throwTheDisk() {
    x = Math.random() * 6 + 1;
    document.querySelector(".counting").innerHTML = Math.trunc(x);
    x = Math.trunc(x);
   let gameImage = document.querySelector(".picture");
    gameImage.src = `Pictures/dice-${x}.png`;


}
total += x;
function forLodo() {
document.querySelector(".winingPoint" ).innerHTML = `Your WiningPoint is ${total}`;
if (total >= 100) {
    alert("THE GAME IS OVER");
} 
else{
    alert("plese count the number");
}
}
