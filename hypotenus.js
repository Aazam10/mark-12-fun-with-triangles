var sidesOfTriangle=document.querySelectorAll(".sides");
var btnRef=document.querySelector("#btn-hypotenuse");
var outputRef=document.querySelector("#result-hypotenuse");


function calculateSumOfSquares(a,b){
    var sumOfSquare= a*a + b*b
   return sumOfSquare;
}
function hidemessage(){
    outputRef.innerText='';
}


function calculateHypotenuse(){
    hidemessage()
    if(!(Number(sidesOfTriangle[0].value)<=0) && !(Number(sidesOfTriangle[1].value)<=0)) {
        var valueOfSumOfSquare= calculateSumOfSquares(Number(sidesOfTriangle[0].value),Number(sidesOfTriangle[1].value));
    var lengthOfHypottenuse=Math.sqrt(valueOfSumOfSquare).toFixed(2);
    outputRef.innerText=`The length of the hypotenuse is ${lengthOfHypottenuse} cm`
    }
    else if((Number(sidesOfTriangle[0].value)<0) || (Number(sidesOfTriangle[1].value))<0){
        outputRef.innerText="Values cannot be negative";
    }
    else{
        outputRef.innerText="Values cannot be empty";
    }
   
}

btnRef.addEventListener("click",calculateHypotenuse);