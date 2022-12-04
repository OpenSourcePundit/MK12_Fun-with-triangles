const measurement = document.querySelectorAll('.measurement');
const CheckAreaBtn = document.querySelector('#checkArea');
const output = document.querySelector('#output');

function product(a,b){
    return a*b
}
function checkArea(){
    const area = .5* product(Number(measurement[0].value),Number(measurement[1].value));
    output.innerText = "The area of triangle is "+ area;
}

CheckAreaBtn.addEventListener('click',checkArea);