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
// send message in email
let send=document.getElementById("send").addEventListener("click",function(){
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let website=document.querySelector("#website").value
    let message=document.querySelector("#message").value
    if(!name||!email||!website||!message){
        alert("Please Entre All data")
        return
    }
    var params={
        name:name,
        email:email,
        website:website,
        message:message
    }
    emailjs.send("service_o6bv127","template_q2h1opu",params).then(function(res){
        if(res.status==200){
            toast(200)
        } else{
            toast(1)
        }
    });
})
// Toast js
function toast(status){
    let toast=document.createElement("div");
    toast.classList.add("toast");
    if(status==200){
        toast.classList.add("succes")
        toast.innerHTML=`<i class="fa-solid fa-circle-check"></i>Successfuly submited!`;
        window.scroll({
            top: 0,
            behavior: "smooth",
          });
          document.querySelector("#name").value=""
          document.querySelector("#website").value=""
          document.querySelector("#email").value=""
          document.querySelector("#message").value=""
    }else{
        toast.classList.add("error")
        toast.innerHTML=`<i class="fa-solid fa-triangle-exclamation"></i>Error submited!`;
    }
    document.body.appendChild(toast)
    setTimeout(()=>{
        toast.remove()
    },5000)
    }
    

