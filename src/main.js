function myFunction() {
    const hours1 = +document.getElementById('hours1').value;
    const minutes1 = +document.getElementById('minutes1').value;
    const hours2 = +document.getElementById('hours2').value;
    const minutes2 = +document.getElementById('minutes2').value;
    const hours3 = +document.getElementById('hours3').value;
    const minutes3 = +document.getElementById('minutes3').value;
    const hours4 = +document.getElementById('hours4').value;
    const minutes4 = +document.getElementById('minutes4').value;
    const hours5 = +document.getElementById('hours5').value;
    const minutes5 = +document.getElementById('minutes5').value;
    const hours6 = +document.getElementById('hours6').value;
    const minutes6 = +document.getElementById('minutes6').value;
    const hours7 = +document.getElementById('hours7').value;
    const minutes7 = +document.getElementById('minutes7').value;
    const hours8 = +document.getElementById('hours8').value;
    const minutes8 = +document.getElementById('minutes8').value;
    const hours9 = +document.getElementById('hours9').value;
    const minutes9 = +document.getElementById('minutes9').value;
    const hours10 = +document.getElementById('hours10').value;
    const minutes10 = +document.getElementById('minutes10').value;

    const hoursRaw = hours1 + hours2 + hours3 + hours4 + hours5 + hours6 + hours7 + hours8 +hours9 + hours10;
    const minutesRaw = minutes1 + minutes2 + minutes3 + minutes4 + minutes5 + minutes6 + minutes7 + minutes8 + minutes9 + minutes10;

    const hours = hoursRaw + (Math.floor(minutesRaw/60));
    const minutes = (minutesRaw % 60);

    document.getElementById("output-time").innerHTML = `${hours} hours <br> ${minutes} minutes`;
}

function testPopulate() {
    document.getElementById('hours1').value = 5;
    document.getElementById('minutes1').value = 45;
    document.getElementById('hours2').value = 7;
    document.getElementById('minutes2').value = 35;
    document.getElementById('hours3').value = 4;
    document.getElementById('minutes3').value = 15;
    document.getElementById('hours4').value = 8;
    document.getElementById('minutes4').value = 0;
    document.getElementById('hours5').value = 4;
    document.getElementById('minutes5').value = 15;
    document.getElementById('hours6').value = 8;
    document.getElementById('minutes6').value = 10;
    document.getElementById('hours7').value = 6;
    document.getElementById('minutes7').value = 15;
    document.getElementById('hours8').value = 8;
    document.getElementById('minutes8').value = 55;
    document.getElementById('hours9').value = 4;
    document.getElementById('minutes9').value = 20;
    document.getElementById('hours10').value = 7;
    document.getElementById('minutes10').value = 5;
}


// above: working
// below: experimental


function makeInputs() {
    // make input fields
}

function getData() {
    // get data from inputs
    // get times
    // get rate
}

function calculate() {
    // calculate time and rate
}

function displayResults() {
    // display the computed time and wage
}