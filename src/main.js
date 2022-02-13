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