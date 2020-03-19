console.log("Hello wrld!");

const currentYear = 2020;

let userName = prompt('What is your name dude?');
alert(`Hello ${userName}`);

let userBirthYear = prompt('When is your birth year?');
let userAge;
userAge = currentYear - userBirthYear;
alert(`Youre ${userAge} years old `);


let squareSideSize = prompt('What is your square side size?');
let squarePerimeter = (squareSideSize*4);
alert(`Your square perimeter is ${squarePerimeter}`);

let circleRadius = prompt('What is your cirle radius?');
let CircleArea = ( Math.PI * (circleRadius * circleRadius));
alert(`Your circle area is ${CircleArea}`);

let roadRange = prompt('Enter the distance in km between two cities (Enter value in digits)');
let roadTime = prompt('Enter in how many hours do you want to get (Enter value in digits)');
let SpeedKmH = (`${roadRange/roadTime} Km/h`);
alert(`You need to drive with ${SpeedKmH} speed`);

const dollarCurrency = 1;
const euroCurrency = 0.86;
let currencyConverterValue =  prompt('Enter right amount of dollars to convert it to euro');
let currencyPrice = (dollarCurrency*euroCurrency)*currencyConverterValue;
alert(`You get a ${currencyPrice.toFixed(2)}EUR from ${currencyConverterValue}USD`);

const fileSize = 820;
let flashDriveVolume = prompt('Enter your flash drive volume in GB to calculate how many 820mb sized files can fit on your drive');
let numberOfFitFiles = (flashDriveVolume/fileSize)*1000;
alert(`Your flash drive can accomodate ${numberOfFitFiles.toFixed(0)} 820mb files`);

let moneyInUserWallet = prompt('Enter how much money do you have in your wallet (Enter value in digits)');
let chocolatePrice = prompt('Enter the price of chocolate bar that you want to buy? (Enter value in digits)');
let amountOfChocolate = (moneyInUserWallet / chocolatePrice);
let valueRounding = Math.floor(amountOfChocolate);
let roundRemainder = amountOfChocolate-valueRounding;
let moneyRemainder = roundRemainder*chocolatePrice;
alert(`You can buy ${valueRounding} bars of your chocolate for ${moneyInUserWallet} dollars, and you have ${moneyRemainder.toFixed(2)}$left`);


let UserNumber = prompt(`Enter the number that you want to reverse`);
let result = 0;
while (UserNumber) {
    result *= 10;
    result += UserNumber %10;
    UserNumber = Math.floor(UserNumber / 10);
}
alert(result);


let UserDepositValue = prompt(`Enter the deposit amount to the bank in 2 months for 5% per year`);
const percentagePerYear = (`${(UserDepositValue/100)*5}`);
let twoMontsPercentage = (`${(percentagePerYear/6).toFixed(3)}`);
alert(`Your percentage fot 2 months = ${twoMontsPercentage}$`);