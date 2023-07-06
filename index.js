let count = 1
let countEl = document.getElementById("incri")
let saveEl= document.getElementById("save-el")
function increment(){
    console.log(countEl)
    count +=1
    countEl.textContent =count
    // console.log(count) 
}

function save(){
    let sav = count + " - "
    saveEl.textContent += sav
    count = 0
    countEl.textContent= count
}

let welcomeEl = document.getElementById("welcome")
let name1 = "Junkie"
let greet = "Welcome Back Hope You Like it"
welcomeEl.textContent = name1 + greet
welcomeEl.textContent += "❤"
