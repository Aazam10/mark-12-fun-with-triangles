var baseOfTriangle=document.querySelector(".base");
var heightOfTriangle=document.querySelector(".height");
var btnRef=document.querySelector("#btn-area");
var outputRef=document.querySelector("#result-area");

function hidemessage(){
    outputRef.innerText='';
}

function calculateArea(){
    hidemessage()
    if(Number(baseOfTriangle.value) && Number(heightOfTriangle.value) !==0){
        var areaOfTriangle=0.5*(Number(baseOfTriangle.value))*(Number(heightOfTriangle.value));
    
    outputRef.innerText=`The area of triangle is ${areaOfTriangle} cm²`;
    }
    
}



btnRef.addEventListener("click",calculateArea);