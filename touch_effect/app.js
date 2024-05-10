// Get UI

// console.log('hi');

const languagues = ['Nodejs', 'Reactjs', 'Vuejs', 'Laravel'];
const colors = ['red', 'skyblue', 'violet', 'yellow'];
const gettxtani = document.querySelector('.txtani');
const gettextlights = document.querySelectorAll('.text-light');

// console.log(languages);
// console.log(languagues[0]); // give index take value

// console.log(languagues.indexOf('Reactjs')); // give value take index 1
// console.log(languagues.indexOf('laravel')); // give value take index -1
// console.log(languagues.indexOf('Laravel')); // give value take index 3

// console.log(colors[languagues.indexOf('Reactjs')]); //skyblue
// console.log(colors[languagues.indexOf('Vuejs')]); //violet

function* generator() {
    var idx = 0;
    while (true) {
        yield idx++;

        if (idx > 3) {
            idx = 0;
        }
    }
}

const genfun = generator();

// console.log(genfun.next()); // {value: 0, done: false}
// console.log(genfun.next().value); // 0
// console.log(genfun.next().value); // 1
// console.log(genfun.next().value); // 2
// console.log(genfun.next().value); // 3
// console.log(genfun.next().value); // 0
// console.log(genfun.next().value); // 1
// console.log(genfun.next().value); // 2
// console.log(genfun.next().value); // 3

// console.log(languagues[genfun.next().value]); // Nodejs
// console.log(languagues[genfun.next().value]); // Reactjs
// console.log(languagues[genfun.next().value]); // Vuejs
// console.log(languagues[genfun.next().value]); // Laravel
// console.log(languagues[genfun.next().value]); // Nodejs
// console.log(languagues[genfun.next().value]); // Reactjs
// console.log(languagues[genfun.next().value]); // Vuejs
// console.log(languagues[genfun.next().value]); // Laravel

function showwords(word) {
    // console.log(word);  // Nodejs
    // console.log(word[0]);  // N

    let x = 0;
    gettxtani.innerHTML = '';
    gettxtani.classList.add(colors[languagues.indexOf(word)]);

    // gettxtani.innerHTML = word;     // Nodejs
    // gettxtani.innerHTML = word[0];  // N
    // gettxtani.innerHTML += word[1]; // No
    // gettxtani.innerHTML += word[2]; // Nod

    let showinterval = setInterval(function () {
        if (x >= word.length) {
            clearInterval(showinterval);
            deletewords();
        } else {
            gettxtani.innerHTML += word[x];
            x++;
        }
    }, 500);

}

function deletewords() {
    let getword = gettxtani.innerHTML;
    //console.log(getword); //Nodejs

    let getlastidx = getword.length - 1;  // 6-1
    //console.log(getlastidx); // 5

    // Nodejs   0 1 2 3 4 5
    // Nodej    0 1 2 3 4 
    // Node     0 1 2 3
    // Nod      0 1 2
    // No       0 1
    // N        0

    let delinterval = setInterval(function () {

        if (getlastidx >= 0) {
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0, gettxtani.innerHTML.length - 1);
            getlastidx--;
        } else {
            //remove old color
            gettxtani.classList.remove(colors[languagues.indexOf(getword)]);

            //get new language
            showwords(languagues[genfun.next().value]);
            clearInterval(delinterval);
        }
    }, 500);

}
showwords(languagues[genfun.next().value]); // showwords("Nodejs");



gettextlights.forEach(function (gettextlight) {
    // console.log(gettextlight);

    let arrtexts = gettextlight.textContent.split("");
    // console.log(arrtexts);

    gettextlight.textContent = "";

    arrtexts.forEach(function (arrtext, idx) {
        // console.log(arrtext);
        // console.log(idx);

        let newem = document.createElement('em');

        newem.textContent = arrtext;
        // console.log(newem);
        newem.style.animationDelay = `${idx * 0.5}s`;

        gettextlight.append(newem);
    });
});

