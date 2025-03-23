let h1 = document.getElementsByTagName("h1")
let section = document.getElementsByClassName("input-section")
let td = document.querySelectorAll("td")
let th = document.querySelectorAll("th")
function darkMode(){
    h1[0].style.color = "white"
    section[0].style.backgroundColor="black"
    for(let i of td){
        i.style.color="white"
    }
    for(let i of th){
        i.style.color="white"
    }
    
}

function lightMode(){
    h1[0].style.color = "black"
    section[0].style.backgroundColor="white"
    for(let i of td){
        i.style.color="black"
    }
    for(let i of th){
        i.style.color="black"
    }
}