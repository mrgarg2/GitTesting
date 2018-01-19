window.addEventListener("load", ()=>{
    console.log("Github testing is done");

    document.querySelector("#message").addEventListener("click",showMessage);
});

function showMessage(){

    document.querySelector("#area").innerHTML = "The message is Displayed";
    
}