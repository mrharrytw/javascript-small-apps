let num1Error = document.getElementById("num1Error");
let num2Error = document.getElementById("num2Error");
let optError = document.getElementById("optError");

num1Error.style.display = "none";
num2Error.style.display = "none";
optError.style.display = "none";

let num1Status,
    num2Status,
    optStatus = false;

document.getElementById("calculateBtn").addEventListener("click", function () {
    
    // let num1 = parseInt(document.getElementById('number1').value);
    // let num2 = parseInt(document.getElementById('number2').value);
    // let operator = document.getElementById('operator').value;

    let num1Element = document.getElementById("number1");
    let num2Element = document.getElementById("number2");
    let operatorElement = document.getElementById("operator");
    let result = 0;

    checkValidation(num1Element, num2Element, operatorElement);

    let num1 = parseInt(num1Element.value);
    let num2 = parseInt(num2Element.value);
    let operator = operatorElement.value;

    if (!num1Status && !num2Status && !optStatus) {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Cannot divided by 0!";
                }
                break;
            default:
                result = "Invalid operator";
                break;
        }
    }
    document.querySelector(".resultDisplay span").textContent = result;
});

document.getElementById("resetBtn").addEventListener("click", function () {
    let result = 0;
    document.querySelector(".resultDisplay span").textContent = result;
    num1Error.style.display = "none";
    num2Error.style.display = "none";
    optError.style.display = "none";
});

function checkValidation(num1Element, num2Element, operatorElement) {
    if (
        num1Element.value === "" ||
        num1Element.value === null ||
        num1Element.value === undefined
    ) {
        num1Error.style.display = "block";
        num1Status = true;
    } else {
        num1Error.style.display = "none";
        num1Status = false;
    }
    if (
        num2Element.value === "" ||
        num2Element.value === null ||
        num2Element.value === undefined
    ) {
        num2Error.style.display = "block";
        num2Status = true;
    } else {
        num2Error.style.display = "none";
        num2Status = false;
    }
    if (operatorElement.value === "empty") {
        optError.style.display = "block";
        optStatus = true;
    } else {
        optError.style.display = "none";
        optStatus = false;
    }
}
