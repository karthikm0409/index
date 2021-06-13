let js = "amazing";

console.log(48 + 45 - 67);
console.log("kartheek");
let firstName = "karthee";
console.log(firstName);
console.log(js);
let myFirstJob = "PAT";
console.log(myFirstJob);
alert("javascript is amazing");
/*
//Assignment operators
/*
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);*/

//comparison operators
/*const now = 2021;
const ageJonas = now - 1991;
const agesarah = now - 2012;
console.log(ageJonas > agesarah);
console.log(ageJonas, agesarah);
console.log(agesarah >= 18);
console.log(now - 1991 > now - 2012);*/
/*const candidateName = 'Kartheek';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;
const karthik = "i'am " + candidateName + ',a' + (year - birthYear) + 'years old' + job + '!';
console.log(karthik);
const newName = `I'm ${candidateName} ,a ${year - birthYear} year old ${job}`;
console.log(newName);*/
/*
const age = 16;
if (age >= 18) {
    console.log(`person is eligible to cast a vote`);
}
else { console.log(`person is not eligible to cast a vote`); }

*/
/*
//type coercion
console.log('I am' + 23 + 'years old');//here the code inside the console does the string conactenation operation.
console.log('23' - '10' - '3');//here the code inside the console performs subtraction operation
console.log(18 > 12);
//except the addition operator remaining all operators performs the airthmetic operations.
//only the additon operation performs concatenation.

//Type conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear));//Number()is a type conversion type
console.log(Number(inputYear) + 18);
console.log(String(12), 12);
// 5 falsy values '0', '' ,null, undefined, nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean());
console.log(Boolean(null));

const money = 0;//here money declkare is zero and its a falsy value
if (money) {
    console.log("Don't spend it alone");//the content inside if() will always considered it as boolean and it will only checks whether it is true or false

} else {
    console.log(`you should get a job!`);
}

*/
//Equality operators
/*
const age = 18;
if (age === 18) console.log('you just become an adult (strict)');
if (age == 18) console.log('you just become an adult (loose)');

const favourite = prompt(`what is your favourite number`);
*/
//Boolean operators

//Logical operators
/*
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasGoodVision && hasDriversLicense;

if (shouldDrive) {
    console.log("sarah is a good driver")
} else {
    console.log('someone else should drive')
}

const isTired = false;
if (hasGoodVision && hasDriversLicense && !isTired) {
    console.log("Sarah is able to drive")
}
*/
/*
const scoreDolphins = (30 + 30 + 50 / 3);
const scoreKoalas = (50 + 30 + 40 / 3);
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the Trophy');
}
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
}
else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log('Both teams wins the trophy');
}
else {
    console.log("No one wins the Trophy")
}
*/


// switch case:

const day = 'monday';

switch (day) {

    case 'monday': // day === monday
        console.log('plan course structure');
        console.log('go to coding meet up');
        break;
    case 'tuesday': //day === tuesday
        console.log('Prepare for theoery videos');
        break;
    case 'wednesday':
        console.log('prepare for practicals');
        break;

}