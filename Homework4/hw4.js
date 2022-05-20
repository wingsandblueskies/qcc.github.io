const lucasMass=Number('78');
const peterMass=Number('92');
const lucasHeight=Number('1.69');
const peterHeight=Number('1.95');

var bmiLucas = (lucasMass) / (lucasHeight * lucasHeight);
console.log(bmiLucas);
var bmiPeter = (peterMass) / (peterHeight * peterHeight);
const lucasHigherBMI = (bmiLucas > bmiPeter )
console.log(lucasHigherBMI)

console.log(`The BMI of Peter is ${bmiPeter}.  The BMI of Lucas is ${bmiLucas}.  Lucas\' BMI is higher than Peter's is ${lucasHigherBMI}.`)


// PART B

const fahrenheit=prompt('Please enter the temprature in F');
const fConversion= (fahrenheit - 32) * (5/9)
console.log(`${fahrenheit}\°F is ${fConversion}\°C`)

const celsius=prompt('Please enter the temprature in C');
const cConversion= (celsius * (9/5)) + (32)
console.log(`${celsius}\°C is ${cConversion}\°F`)

// PART C

if (bmiLucas > bmiPeter){
    console.log(`Lucas\' BMI \(${bmiLucas}\) is higher than Peter\'s\ \(${bmiPeter}\)!`)}
else {
    console.log(`Peter\'s BMI \(${bmiPeter}\) is higher than Lucas\'s\ \(${bmiLucas}\)!`)};

// PART D

function convertFahrenheitToCelsisus(f){
    const fahrenheit=(f)
    const fConversion= (fahrenheit - 32) * (5/9)
    console.log(`${fahrenheit}\°F is ${fConversion}\°C`)
}

function convertCelsisusToFahrenheit(c){
    const celsius=(c);
    const cConversion= (celsius * (9/5)) + (32)
    console.log(`${celsius}\°C is ${cConversion}\°F`)
    }

console.log(convertCelsisusToFahrenheit(100))
console.log(convertCelsisusToFahrenheit(0))
console.log(convertCelsisusToFahrenheit(10))

console.log(convertCelsisusToFahrenheit(32))
console.log(convertCelsisusToFahrenheit(10))
console.log(convertCelsisusToFahrenheit(102))