let seeHotels = document.querySelector(".seehotels")
let body = document.body
let navHotel = document.querySelectorAll("li")
let blurDiv = document.querySelector(".blurDiv")
let blurDiv2 = document.querySelector(".blurDiv2")
let fa = document.querySelector(".fa")
let buttonX = document.querySelector(".fa-x")
let form = document.querySelector("form")

seeHotels.addEventListener("click", () => {
    blurDiv.style.display = "flex"

})
navHotel[0].addEventListener("click", () => {
    blurDiv.style.display = "flex"

})

buttonX.addEventListener("click", () => {
    blurDiv.style.display = "none"

})

let accs = JSON.parse(localStorage.getItem("booking")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault()


    class Acc {
        constructor(name, email, quantity, date, day) {
            this.name = name
            this.email = email
            this.quantity = quantity
            this.date = date
            this.day = day
        }
    }

    let allAccs = new Acc(e.target.name.value, e.target.email.value, e.target.quantity.value, e.target.date.value, e.target.day.value)

    if (e.target.name.value == "" || e.target.email.value == "" || e.target.quantity.value == "" || e.target.day.value == "") {
        alert("fill all the inputs to book")
    } else {
        accs.push(allAccs)
        localStorage.setItem("booking", JSON.stringify(accs))
    }


    
})


navHotel[1].addEventListener("click", () => {
    blurDiv2.style.display = "flex"

})

fa.addEventListener("click", () => {
    blurDiv2.style.display = "none"
})

