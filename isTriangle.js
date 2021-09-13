listOfAngles=document.querySelectorAll(".angles");
btnRef=document.querySelector("#is-triangle");
outputRef=document.querySelector("#result");



function calculateSumOfAngles(angle1,angel2,angel3){
    var sumOfAngles=angle1+angel2+angel3;
    return sumOfAngles;
}
function hidemessage(){
    outputRef.innerText='';
}

function isTriangle(){
    hidemessage();
    if(!(Number(listOfAngles[0].value)<=0) && !(Number(listOfAngles[1].value)<=0) && !(Number(listOfAngles[2].value)<=0)){
         var sum=calculateSumOfAngles(Number(listOfAngles[0].value),Number(listOfAngles[1].value),Number(listOfAngles[2].value));
    if(sum===180){
        outputRef.innerText='Yayy, the angles form a triangle';
    }else{
        outputRef.innerText='Oh Oh!, the angles do not form a triangle';
    }
    }
    else if((Number(listOfAngles[0].value)<0) || (Number(listOfAngles[1].value)<0) || (Number(listOfAngles[2].value)<0)){
         outputRef.innerText='Angles cannot be negative';

    }
    else{
         outputRef.innerText='Input value cannot be empty';
    }
   
}


btnRef.addEventListener("click",isTriangle);