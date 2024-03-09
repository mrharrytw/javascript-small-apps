// Get UI

const inputs = document.querySelectorAll('input');
// console.log(inputs);

let datas = [];

inputs.forEach(function (input) {
    //console.log(input);

    input.addEventListener('keyup', function () {
        datas.push({
            digit: inputs[0].value,
            name: inputs[1].value,
            exp: inputs[2].value,
            ccv: inputs[3].value
        });

        console.log(datas[datas.length - 1]);
    });
});