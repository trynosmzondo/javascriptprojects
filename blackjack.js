/*let firstCard = 8
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
function startGame(){
    if (sum <= 20){
    message = "Do you want to draw a new card?"
    
}else if (sum === 21){
    message = "Wohoo! You've got BlackJack!"
    hasBlackJack = true
}else {
    message = "You're out of the game"
    isAlive = false
}
messageEl.textContent = message
cardsEl.textContent = "Cards:" + firstCard + "  " + secondCard
sumEl.textContent = "sum:" + sum
}*/




/*let age = 21
if (age <= 20){
    console.log("You can not enter the club")
}else{
    console.log("Welcome")
}

let age = 100
if (age < 100){
    console.log("Here is your birthday card from the King")
}else if(age === 100){
    console.log("Here is your birthday card from the King!")
}else{
    console.log("Not eligible, you have already gotten one")
}*/

var ourArray = ["Stimpsoon", "J", ["cat"]]
var removedFromOurArray = ourArray.shift()
console.log(ourArray)