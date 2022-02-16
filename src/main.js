const hrsElements = document.querySelectorAll('.input-hr')
const minElements = document.querySelectorAll('.input-min')
const hrs = [];
const min = [];

let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

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

    let adjustedHrs = sumHrs + (Math.floor(sumMin/60))
    let adjustedMin = sumMin % 60

    console.log('adjusted hours = ' + adjustedHrs)
    console.log('adjusted min = ' + adjustedMin)

    document.getElementById('output-hrs').innerHTML = adjustedHrs + ' hours '
    document.getElementById('output-min').innerHTML = adjustedMin + ' minutes'

    const rate = document.getElementById('rate').valueAsNumber
    let wage = (adjustedHrs * rate) + (adjustedMin/60 * rate)
    console.log('wage raw = ' + wage)
    
    document.getElementById('output-wage').innerHTML = dollarUS.format(wage)

    // rounding wages attempt
    // doesn't work correctly
    if (adjustedMin % 30 < 1) {
        let minRounded = 30;
        let wageRounded = (adjustedHrs * rate) + (minRounded/60 * rate)
        document.getElementById('output-rounded').innerHTML = dollarUS.format(wageRounded)
    } else { 
        document.getElementById('output-rounded').innerHTML = 'No rounding needed'
    }

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

// enter key fires go button
// issue - also re-fires populate button or any other button that is in focus **fixed with blur()
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        calculate()
        e.target.blur()
    } 
})