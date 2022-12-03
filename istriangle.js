var input = document.querySelectorAll('.angle-input');
var isTriBtn = document.querySelector('#is-tri-btn');
var output = document.querySelector('#output');

function triangle(angle1,angle2,angle3){
    const sum = angle1+angle2+angle3;
   if(sum === 180){
    output.innerText="YAAY..Its a Triangle !";
    console.log(sum);
   }
   else{
    output.innerText="NAAY..Its not a Triangle !";
    console.log(sum);
   }
}
function checkSum(){
    triangle(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    
}

isTriBtn.addEventListener("click",checkSum); 