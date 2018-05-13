//Write a function that would allow you to do this:

function createBase(val) {
    return function (otherVal) {
        return val + otherVal;
    };
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
//console.log(addSix(10)); // returns 16
//console.log(addSix(21)); // returns 27

console.log("hello");

/*Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique values in it 
(so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). 
Try to make it as fast as possible! */
let myArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function takesArray(array){
let newArray = array.filter((item, index, array) => array.indexOf(item) == index) 
    return newArray
}
console.log(takesArray(myArray));


function takesArray2(array){
   let newArray= array.filter(function(value, index, array){
 return array.indexOf(value) === index;
   });
  return newArray
}

takesArray2(myArray);
console.log(takesArray2(myArray));
