let burger=document.querySelector(".burger");
let navBar=document.querySelector(".nav-bar");
let navList=document.querySelector(".nav-list");
let rightNav=document.querySelector(".right-nav");

burger.addEventListener("click",()=>{
    rightNav.classList.toggle("v-class");
    navList.classList.toggle("v-class");
    navBar.classList.toggle("h-nav");
})