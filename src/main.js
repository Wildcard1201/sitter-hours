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
    // no longer needed as it was (static values)
    // todo - rewrite into a random number generator to populate fields dynamically
}


// above: working
// below: experimental

const hrsElements = document.querySelectorAll('.input-hr')
const minElements = document.querySelectorAll('.input-min')

const hrs = [];
const min = [];

document.getElementById('go').addEventListener('click', calculate)

function calculate() {
    // clear arrays - otherwise multiple clicks keeps adding the same entries over and over
    while(hrs.length>0){
        hrs.pop()
    }
    while(min.length>0){
        min.pop()
    }
    
    // add numerical values for each input to array
    hrsElements.forEach( (ele) => {
        // checks if value is truthy aka not NaN
        if(ele.valueAsNumber) {
            hrs.push(ele.valueAsNumber)
        }
    })

    minElements.forEach( (ele) => {
        // checks if value is truthy aka not NaN
        if(ele.valueAsNumber) {
            min.push(ele.valueAsNumber)
        }
    })

    let sumHrs = hrs.reduce( (prev, curr) => { return prev + curr })
    let sumMin = min.reduce( (prev, curr) => { return prev + curr })

    console.log('sum hours = ' + sumHrs)
    console.log('sum min = ' + sumMin)

    document.getElementById('output-hrs').innerHTML = sumHrs + ' hours '
    document.getElementById('output-min').innerHTML = sumMin + ' minutes'

    // leftover logic from old version - for reference
    // const hours = hoursRaw + (Math.floor(minutesRaw/60));
    // const minutes = (minutesRaw % 60);
    // document.getElementById("output-time").innerHTML = `${hours} hours <br> ${minutes} minutes`;

}

document.getElementById('reset').addEventListener('click', () => {
    hrsElements.forEach( (ele) => {
        ele.value = '';
    })
    minElements.forEach( (ele) => {
        ele.value = '';
    })
})

document.getElementById('populate').addEventListener('click', populate)

function populate() {
    console.log('populate function fired')

    hrsElements.forEach( (ele) => {
        ele.value = Math.floor(Math.random() * 10 ) + 1;
    })
    minElements.forEach( (ele) => {
        ele.value = Math.floor(Math.random() * 60 ) + 1;
    })
}