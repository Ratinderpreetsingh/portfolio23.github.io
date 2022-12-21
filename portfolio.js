var menu= document.getElementById("menua");
function opsen(){
    console.log("ad");
   menu.classList.remove("men");
   menu.style.right="0px";
} 
function cclose(){
    console.log("ad");
    menu.classList.add("men");
    menu.style.right="0px";
} 
function alerrt(){
    alert("sent successfully");
}