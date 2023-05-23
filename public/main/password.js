let pass=document.querySelector("#password")
let btn=document.querySelector(".btn_mostrar")
let mostrars=document.querySelector(".mostrar")
let ver=document.querySelector(".ocultar")
btn.addEventListener("click",mostrar)
 
function mostrar(){
    if(pass.type==="password"){
        pass.type="text";
    }else{
        pass.type="password";
        console.log("esta funcionando")
    }
}