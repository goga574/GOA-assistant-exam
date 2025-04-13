

let redbutton = document.querySelectorAll(".seebutton")

let unique = document.querySelectorAll(".unique1")
let blurdiv = document.querySelector(".blurdiv")
let body = document.body
let butdiv = document.querySelector(".butdiv")

redbutton[0].addEventListener("click",function(){
    blurdiv.style.display= " block"
    unique[0].style.display = "flex"
})

butdiv.addEventListener("click",function(){
    unique[0].style.display = "none"
    blurdiv.style.display= "none"
})

redbutton[1].addEventListener("click",function(){
    blurdiv.style.display= "block"
    unique[1].style.display = "flex"
})

redbutton[2].addEventListener("click",function(){
    blurdiv.style.display= "block"
    unique[2].style.display = "flex"
})


