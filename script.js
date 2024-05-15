// Icon of nav
let icon=document.querySelector("img.myicon");
let nav=document.querySelector(".mynav");
let close=document.querySelector(".close")
icon.addEventListener("click",function(){
    nav.classList.toggle("hidden")
})
close.addEventListener("click",function(){
    nav.classList.add("hidden")
})