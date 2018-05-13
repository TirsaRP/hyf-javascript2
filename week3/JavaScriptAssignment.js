//We learned a little bit about callbacks in JS. 
//A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed. 
//There is another function called setTimeout that will wait a specified period of time and then execute a function. For example:

function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000);

setTimeout(function () { console.log("i am awesome!") }, 5000);  //another example that does the same

//If you run the above code it will wait 5 seconds and then print I am done. 
//Please read something about setTimeout on MDN. The first argument to the setTimeout call is the callback (doIt).

// 3.1 We saw that we can pass functions as arguments to other functions. 
//Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
    // What to do here? 
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

//passing a call back function into another function as it's parameter 
function myName1(name) {
    console.log(name);
}
function fullName1(callBackFunc) {
    callBackFunc("Tirsa Pedersen");
}
fullName1(myName1);

//passing a function with arguments into another function 
function myName2(name) {
    console.log(name);
}
function fullName2(func) {
    func();
}
fullName2(function () { myName2("Rosa Pedersen") });

//use the apply function and have a third parameter that is an array of the arguments
function myName3(first, last) {
    console.log('My name is ' + first + " " + last);
}
function fullName3(callBackFunction, argument) {
    callBackFunction.apply(this, argument);
}
fullName3(myName3, ['Tirsa Rosalba', 'Ramos-Pedersen']);


// 3.2 You must write a function that takes 4 arguments.
/*  A start value and  An end value
    A callback to call if the number is divisible by 3
    A callback to use if the number is divisible by 5
The function should first generate an array containing values from start value to end value (inclusive).
Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.
The function should call the second callback if the array value is divisible by 5.
Both functions should be called if the array value is divisible by both 3 and 5. */
function sayThree() {
    console.log("This number is divisible by three");
}
function sayFive() {
    console.log("This number is divisible by five");
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];
    for (i = startIndex; i <= stopIndex; i++) {
        values.push(i);         //pushes 10-15 to values 
        if (i % 3 === 0) {      //if true:  i divisible by 3
            console.log(i)
            threeCallback();
        }
        if (i % 5 == 0) {       //if true: i divisible by 5
            console.log(i);
            fiveCallback();
        }
        // console.log(values);  returns [10,11,12,13,14,15]
    }
}
threeFive(10, 15, sayThree, sayFive);
threeFive(1, 20, sayThree, sayFive);
// make array
// start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you start coding


/*Note: The following assignments include some problems from freeCodeCamp. While we normally ask you to use more modern const and let keywords to declare variables, 
currently freeCodeCamp does not give you that option and expects you to use the older var keyword.*/


//3.3 Please solve this problem:

//https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
};
console.log(repeatStringNumTimes("abc", 3));

//3.3.1: with a for loop.

function repeatStringNumTimes1(str, num) {
    if (num < 0) {
        return " ";
    }
    var newString = "";
    for (var i = 0; i < num; i++) {
        newString += str;
    }
    return newString;
}
console.log(repeatStringNumTimes1("abc", 3));

//3.3.2: with a while loop.
function repeatStringNumTimes2(str, num) {
    var newString2 = "";
    while (num > 0) {
        newString2 += str;
        num--;
    }
    return newString2;

}
console.log(repeatStringNumTimes2("abc", 3));

//3.3.3: with a do...while loop.
function repeatStringNumTimes3(str, num) {         //NEED TO COME BACK TO
    var newString3 = "";
    do {
        newString3 += str;
        num--;
    } while (num > 0);
    return newString3
}
console.log(repeatStringNumTimes3("abc", 3));

//3.4 Some practice with objects:

//https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions

var MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;
};
console.log(new MotorBike());   

function MotorBike1(numOfWheels, numOfEngines, numOfSeats) {
    this.wheels = numOfWheels;
    this.engines = numOfEngines;
    this.seats = numOfSeats;
};

var newMotorBike =new MotorBike1(3, 1, 2);  
console.log(newMotorBike);

//3.5 Nested loops

//https://www.freecodecamp.com/challenges/nesting-for-loops

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}
// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);  //5040


//3.6 We did some work with arrays:
const arr = [1, 2, 3];
//We can also nest arrays inside arrays like this:
const arr2d = [[1, 2], [3, 4], [5, 6]];
//(for math people you can think of this as a matrix)

/*
How would you print all the items of an array with 3 dimensions? How about with K dimensions? 
What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it.)

3.7 Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here. */

const x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x); //10
console.log(x); //9

const y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y); //{x:10}
console.log(y); // {x:10}
f2(y);
console.log(y); //{x:11}

//When you pass a primitive number into a function, you are passing a copy of that value. So inside the function x=10 but outside x still =9
//When you pass an object into a function, you are passing a reference to that object and therefor changing the object globally. 

