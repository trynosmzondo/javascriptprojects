let num1 = 15 
let num2 = 3
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
document.getElementById("sum-el").textContent = "Sum:"

function add(){
    let result = num1 + num2
    num1 + num2
    document.getElementById("sum-el").textContent = "sum:" + result
    console.log(result)
}
function substract(){
    let result = num1 - num2
    document.getElementById("sum-el").textContent = "sum:" + result
    console.log(result)
}
function divide(){
    let result = num1 / num2
    document.getElementById("sum-el").textContent = "sum:" + result
    console.log(result)
}
function multiply(){
    let result = num1 * num2
    document.getElementById("sum-el").textContent = "sum:" + result
    console.log(result)
}
multiply()
divide()
add()
substract()
