const getcurmonth = document.getElementById('curmonth');
const getcuryear = document.getElementById('curyear');
const getuimonths = document.getElementById('months');
const getuiyears = document.getElementById('years');
const getcaldays = document.getElementById('caldays');
const getmonthbtn = document.querySelector('.month-btn');
const getyearbtn = document.querySelector('.year-btn');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let startyear = 2020;
let endyear = 2030;

let month, year;

// console.log(new Date()); // Fri Apr 19 2024 01:00:45 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 1, 10)); // Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 0, 0)); // Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 5, 0)); // Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023, 1, 30)); // Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)




// getmonthbtn.addEventListener('click', function () {
//     if (this.lastElementChild.classList.contains('show')) {
//         this.lastElementChild.classList.remove('show')
//     } else {
//         this.lastElementChild.classList.add('show');
//     }
// });

// getyearbtn.addEventListener('click', function () {
//     if (this.lastElementChild.classList.contains('show')) {
//         this.lastElementChild.classList.remove('show')
//     } else {
//         this.lastElementChild.classList.add('show');
//     }
// });

getmonthbtn.addEventListener('click', function () {
    getuimonths.classList.toggle('show');
});

getyearbtn.addEventListener('click', function () {
    getuiyears.classList.toggle('show');
});


window.addEventListener('load', function () {
    // console.log('I am working');

    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    getcurmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();

});

function initmonths() {
    // console.log('I am month');

    getuimonths.innerHTML = '';

    // <div class="dropdown-item">Jan</div>

    for (x = 0; x < months.length; x++) {
        // console.log(x);  // 0 to 11

        const newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');
        // console.log(newdiv);

        newdiv.addEventListener('click', function () {

            // => Method-1
            // console.log(x); //current month index
            // month = x;
            // getcurmonth.textContent = months[month];
            // initdays();

            // => Method-2
            // console.log(this);
            // console.log(this.textContent); // Jan Feb Mar
            // month = months.indexOf(this.textContent); // Value to index (Eg: Feb to 1)
            // getcurmonth.textContent = months[month];
            // initdays();
        });

        // =>Method-3
        newdiv.onclick = updatedays(x);

        getuimonths.appendChild(newdiv);
    }
}

function updatedays(idx) {
    // console.log(idx); // 0 to 11

    let selectmonth = idx;
    // console.log(selectmonth); // 0 to 11

    return function () {
        month = selectmonth;
        // console.log(month);

        getcurmonth.textContent = months[month];
        initdays();
    }
}

function inityears() {
    // console.log('I am year');

    getuiyears.innerHTML = '';

    for (let x = startyear; x <= endyear; x++) {
        const newdiv = document.createElement('div');
        newdiv.textContent = x;
        newdiv.classList.add('dropdown-item');

        newdiv.addEventListener('click', function () {

            // => Method-1
            // console.log(x); //2020 ..... 2030
            // year = x;
            // getcuryear.textContent = year;
            // initdays();

            // => Method-2
            // console.log(this);
            // console.log(this.textContent); 
            // year = this.textContent;
            // getcuryear.textContent = year;
            // initdays();
        });

        // =>Method-3
        // newdiv.onclick = updatedaysbyyear(x);

        // =>Method-4
        newdiv.onclick = () => {
            // console.log(x);
            year = x;
            getcuryear.textContent = year;
            initdays();
        }

        getuiyears.appendChild(newdiv);
    }
}

function updatedaysbyyear(x) {
    // console.log(x); // 2020...2023

    let selectyear = x;

    return function () {
        year = selectyear;
        console.log(year);

        getcuryear.textContent = year;
        initdays();
    }
}


function initdays() {
    // console.log('I am day');

    getcaldays.innerHTML = '';

    let tmpdays = new Date(year, month, 0);
    // console.log(tmpdays); // Sun Mar 31 2024 00:00:00 GMT+0630 (Myanmar Time)

    let getalldays = alldays(year, month);
    // console.log(getalldays); // 30

    let getpreendday = tmpdays.getDay();
    // console.log(getpreendday); // 0

    for (let x = 0; x <= getpreendday; x++) {
        // console.log(x); // 0

        // <label class="day">1</label>
        let newlabel = document.createElement('label');
        newlabel.className = "day blank";
        // console.log(newlabel);

        getcaldays.appendChild(newlabel);
    }

    for (let y = 1; y <= getalldays; y++) {
        // console.log(y); // 1 to 30

        // <label class="day">1</label>
        let newlabel = document.createElement('label');
        newlabel.textContent = y;
        newlabel.className = "day";
        // console.log(newlabel);

        getcaldays.appendChild(newlabel);
    }


}

function alldays(year, month) {
    // console.log(year, month); // 2024 3

    let curalldays = new Date(year, month + 1, 0);
    // console.log(curalldays); // Tue Apr 30 2024 00:00:00 GMT+0630 (Myanmar Time)

    curalldays = curalldays.getDate();
    // console.log(curalldays); // 30

    return curalldays;

}