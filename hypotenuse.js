const inputSides = document.querySelectorAll('.input-side');
const calculateBtn = document.querySelector('#calculate-btn');
const output = document.querySelector('#output');

function calculate() {
    const square = sumOfSquares(Number(inputSides[0].value), Number(inputSides[1].value));
    const hypotenuse = Math.sqrt(square);
    output.innerText = "The Length of Hypotenuse is " + hypotenuse.toFixed(2);
}
function sumOfSquares(a, b) {
    return a ** 2 + b ** 2;
}

calculateBtn.addEventListener("click", calculate); 