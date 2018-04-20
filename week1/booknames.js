//1. Open a new js file and start by declaring an array that contains 10 strings. 

var bookNamesArr = [
    "love_actually",
    "beloved",
    "twisted",
    "explosion",
    "food_godess",
    "queen_bee",
    "motherhood",
    "parents_guide",
    "wonderland",
    "peter_pan"
];

//2. Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. 
console.log(bookNamesArr);

//3. Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

var list = document.createElement("UL");
list.setAttribute("id", "libro");
var listName = document.createTextNode("List of Books:");
list.appendChild(listName);
document.body.appendChild(list);      //ALL of this makes "list of books" appear as a ul name on my webpage


function bookList() {
    var i;
    for (var i = 0; i < bookNamesArr.length; i++) {         //becasuse i want this to run through the array

        var listItems = document.createElement("LI");                //creates li
        var itemText = document.createTextNode(bookNamesArr[i]);    //creates text using the array
        listItems.appendChild(itemText);                            //appends the text to the li
        document.getElementById("libro").appendChild(listItems);    //appends the li to the body
    }

    console.log(bookList);

bookList();