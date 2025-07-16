let seeHotels = document.querySelector(".seehotels")
let body = document.body
let navHotel = document.querySelectorAll("li")
let blurDiv = document.querySelector(".blurDiv")
let buttonX = document.querySelector(".fa-x")

seeHotels.addEventListener("click",()=>{
    blurDiv.style.display = "flex"
    
})
navHotel[0].addEventListener("click",()=>{
    blurDiv.style.display = "flex"
})

buttonX.addEventListener("click" , ()=>{
    blurDiv.style.display = "none"
})

