/*document.getElementById("count-el").innerText = 21

let firstBatch = 5
let  secondBatch = 10
let count = firstBatch + secondBatch
console.log(count)

let myAge = 35
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio

console.log(myDogAge)

let bonusPoints = 50
console.log(bonusPoints)

bonusPoints += 50

console.log(bonusPoints)

bonusPoints-=75

console.log(bonusPoints)

bonusPoints+=45

console.log(bonusPoints)*/

/*function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()*/
let countEl = document.getElementById("count-el") 

let count = 0

function increment(){
    console.log("clicked")
    count += 1
    countEl.textContent = count
    console.log(count)
}
/*let welcomeEl = document.getElementById("welcome-el")

let name = "trynos"
let greeting = "Hi, how are you"
welcomeEl.innerText = greeting + name*/

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


