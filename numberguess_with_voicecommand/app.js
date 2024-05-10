const minnum = document.querySelector('.minnumber');
const maxnum = document.querySelector('.maxnumber');
const getinput = document.querySelector('#guessnumber');
const getbtn = document.querySelector('#btn');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const getgameform = document.querySelector('.gameform');

const getmicbtn = document.getElementById('mic-btn');
const getvocctn = document.getElementById('voice-container');

const min = 10;
const max = 20;
// let winningnum = 5;
let winningnum = generateRandomNumber(min, max);
let gameleft = 3;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

minnum.textContent = min;
maxnum.innerText = max;


// Start of Voice Command

// For Chrome Browser Support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition;

getmicbtn.addEventListener('click', function () {
    // console.log(getrec);

    getrec.start(); // start() is default function from Recognition api

    getrec.addEventListener('result', (e) => talking(e));
});

function talking(element) {
    // console.log(element);
    // console.log(element.results[0][0].transcript);

    const micresult = element.results[0][0].transcript;
    // console.log(micresult);

    micmessage(micresult);
    getnumber(micresult);
}

function micmessage(micresult) {
    getvocctn.innerHTML = `<span>Did you say ${micresult} ?</span>`
}

function getnumber(micresult) {
    // console.log(micresult);
    // console.log(typeof micresult);

    const getnum = +micresult;
    // console.log(typeof getnum);

    if (Number.isNaN(getnum)) {
        getvocctn.innerHTML = `<div>This is not a valid number!</div>`
        return false;
    }

    getinput.value = getnum;

    getrec.stop();
}
// End of Voice Command


getbtn.addEventListener('click', function (e) {
    e.preventDefault();

    //To clear error message2 when user input next value
    getinput.addEventListener('input', function () {
        message2.textContent = "";
    });

    let guess = +getinput.value;
    if (guess < min || guess > max || isNaN(guess)) {
        message2.textContent = `Please enter a number between ${min} to ${max} .`;

        // to auto focus textbox and delete value even after error message2 appear.
        getinput.value = "";
        getinput.focus();

    } else if (guess == winningnum) {
        //message1 winning 
        message1.textContent = `${winningnum} is correct! You Win.`;
        message1.style.color = "green";

        //getinput border color to green
        getinput.style.borderColor = "green";
        getinput.style.borderWidth = "3px";

        //disable getinput
        getinput.disabled = true;

        //change btn value to Play again?
        getbtn.value = "Play Again?";

        // add event listener to reload page when "Play Again?" is clicked
        getbtn.addEventListener('click', function () {
            location.reload();
        });

    } else {

        gameleft -= 1;

        if (gameleft === 0) {
            //message1 losing
            message1.textContent = `Game Over, You Lost. The Correct Number is ${winningnum} .`;
            message1.style.color = 'red';

            //getinput border color to red
            getinput.style.borderColor = "red";
            getinput.style.borderWidth = "3px";

            //disable getinput
            getinput.disabled = true;

            //change btn value to Play again?
            getbtn.value = "Play Again?";

            // add event listener to reload page when "Play Again?" is clicked
            getbtn.addEventListener('click', function () {
                location.reload();
            });
        } else {
            //getinput border color to red
            getinput.style.borderColor = "red";
            getinput.style.borderWidth = "3px";

            //message1 with gameleft
            message1.textContent = `${guess} is not correct answer! You have ${gameleft} guess left.`;
            message1.style.color = 'red';

            //Clear getinput old value
            getinput.value = "";

            //autofocus getinput
            getinput.focus();
        }
    }
});
// 26VC