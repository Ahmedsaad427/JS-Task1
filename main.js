// program 1 :
/*
function calculateAverage(numbers) {
    
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    var average = sum / numbers.length;
    return average;
}
var numberArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var avg = calculateAverage(numberArray);
console.log("The average is: " + avg);
*/

////////////////////////////////////////////////////////////////////////////////////

// program 2 :
/*
var base = 10;
var height = 8;
var area = calculateTriangleArea(base, height);
function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        return "Base and height must be positive numbers";
    } else {
        return (base * height) / 2;
    }
}
console.log("The area of the triangle is: " + area);
*/

///////////////////////////////////////////////////////////////////////


// program 3 :

/*
function ageInDays(ageInYears) {
    var daysInYear = 365.25;
    var ageInDays = ageInYears * daysInYear;
    return ageInDays;
}
var ageInYears = 19;
var ageInDaysResult = ageInDays(ageInYears);
console.log("Age in days: " + ageInDaysResult);
*/

/////////////////////////////////////////////////////////////////////////

// progaram 4 : 

/*
function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var x = 10;
var y = 50;
var result = addNumbers(x, y);
console.log("The Sum is: " + result);
*/

////////////////////////////////////////////////////////////////////////////////
 
// program 5 :

/*
function getFirstElement(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr[0];
    } else {
        return undefined; 
    }
}

var numbers = [10, 20, 30, 40, 50];
var firstElement = getFirstElement(numbers);
console.log("The first element is: " + firstElement);
*/


////////////////////////////////////////////////////////////////////////////////////////

// progarm 6 :
/*
function showName() {
    var name = "Ahmed Saad Karam Elasyed "; 
 console.log("My Name is : "+ name)
}
showName();
*/

// ("This code is shwon on console and i can't Show it in Html page ")

///////////////////////////////////////////////////////////////////////////

// program 7 :

/*
function hoursToSeconds(hours) {
    if ( hours >= 0) {
        return hours * 3600; 
    } else {
        return "Invalid input"; 
    }
}


var hours = 10;
var seconds = hoursToSeconds(hours);
console.log(hours + " hours is equal to " + seconds + " seconds.");
*/

///////////////////////////////////////////////////////////////////////////


// program 8 :
/*
function checkSum() {
    var num1 = 100; 
    var num2 = 200;

    var num3 = 30;  
    var num4 = 10;

    var sum = num1 + num2 + num3 + num4;

    var resultParagraph = document.getElementById("result");

    if (sum > 350) {
        resultParagraph.textContent = "The sum is greater than 350. (Sum = " + sum + ")";
        resultParagraph.textContent = "True ";


    } else {
        resultParagraph.textContent = "The sum is not greater than 350. (Sum = " + sum + ")";
        resultParagraph.textContent = "False ";
    }
}
*/

///////////////////////////////////////////////////////////////////////////


// program 9:
/*
function isZero(number) {
    if ( number == 0) {
        return "True"; 
    } else {
        return "False"; 
    }

}
var myNumber = 10; 
var result = isZero(myNumber);

console.log("Is the number equal to zero? " + result);
*/

// program 10:

/*
function calculateRemainder(dividend, divisor) {
    if (divisor === 0) {
        return "Cannot divide by zero";
    }
    
    return dividend % divisor;
}

var num1 = 10;
var num2 = 3;
var remainder = calculateRemainder(num1, num2);
console.log("The remainder of " + num1 + " divided by " + num2 + " is " + remainder);
*/


///////////////////////////////////////////////////////////////////////////



// program 11: 

/*
function findLargestNumber(num1, num2) {
    if (num1 > num2) {
        console.log("The greater number is: " + num1);
    } else if (num2 > num1) {
        console.log("The greater number is: " + num2);
    } else {
        console.log("Both numbers are equal.");
    }
}

var number1 = 20;
var number2 = 20;
findLargestNumber(number1, number2);

*/

///////////////////////////////////////////////////////////////////////////

// program 12 :

/*
function isNumber(input) {
    return typeof input === 'number';
}

var myVar1 = "Hello";

console.log("Input is a Number ? : " + isNumber(myVar1)); 
*/

///////////////////////////////////////////////////////////////////////////


// program 13:

/*
function getCurrentDate() {
    var currentDate =  Date();
    return currentDate;
}

var currentDate = getCurrentDate();
console.log("Current date: " + currentDate);
*/

///////////////////////////////////////////////////////////////////////////


                                    // Finished Successfully //