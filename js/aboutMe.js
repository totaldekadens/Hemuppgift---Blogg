

let burger = document.querySelector(".burger")
let home = document.querySelector(".home2")
let about = document.querySelector(".about2")
let blog = document.querySelector(".blog2")

burger.addEventListener("click", () => {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("none");      
})

home.addEventListener("click", () => {

    console.log("Tjena")
    let menu = document.querySelector(".menu")
    menu.classList.add("none");
})

about.addEventListener("click", () => {
    let menu = document.querySelector(".menu")
    menu.classList.add("none");
})

blog.addEventListener("click", () => {
    let menu = document.querySelector(".menu")
    menu.classList.add("none");
})
