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

var list = document.createElement("UL");    //ALL of this makes "list of books" appear as a ul name on my webpage
list.setAttribute("id", "libro");
document.body.appendChild(list);
document.getElementById("libro").innerHTML = "List of Books:";


function bookList() {
    for (var i = 0; i < bookNamesArr.length; i++) {         //becasuse i want this to run through the array
        var listItems = document.createElement("LI");                //creates <li>
        var itemText = document.createTextNode(bookNamesArr[i]);    //creates text using the array
        listItems.appendChild(itemText);                            //appends the text to  <li>
        document.getElementById("libro").appendChild(listItems);    //appends-adds <li> to the DOM
    }
}
//listItems.setAttribute("class", "li");
bookList();

function bookList2() {
    for (var i = 0; i < bookNamesArr.length; i++) {
        var listItems2 = document.createElement("LI");                              //creates li
        listItems2.setAttribute("class", "name");                                   //gives li class name of "name"
        document.getElementsByClassName("name")[i].innerHTML = bookNamesArr[i];     //makes the content inside each li
        document.body.appendChild(listItems2);                                      //appends-adds <li> to DOM
    }
}
bookList2();

function func3() {

    for (var i = 0; i < bookNamesArr.length; i++) {
        let ul = document.querySelector('ul')           //makes a <ul>
        let li = document.createElement('li')           // Creating a <li> element
        li.innerHTML = bookNamesArr[i];                 // Adding content to the <li> element
        ul.append(li);                                  // Adding it to the DOM                       
    }
}
/*
//4. Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up 
//   in point 1 as a key, and it should have at least the following fields: title, language and author.

var love_actually = { title: "Love Actually", language: "English", author: "Unknown" };
var beloved = { title: "Beloved", language: "English", author"Bob Jones" };
var twisted = { title: "Twisted", language: "English", author: "Laurie Andersen" };
var explosion = { title: "Explosion", language: "English", author: "John Bacon" };
var food_godess = { title: "Food Godess", language: "Spanish", author: "Maria Gonzales" };
var queen_bee = { title: "Queen Bee", language: "Spanish", author: "Rosa Lopez" };
var motherhood = { title: "Motherhood", language: "Swedish", author: "Malin Larsson" };
var parents_guide = { title: "Parent's Guide", language: "Swedish", author: "Ove Andersson" },
var wonderland = { title: "Wonderland", language: "English", author: "Jack Banner" };
var peter_pan = { title: "Peter Pan", language: "Swedish", author: "James Barrie" };

//5. Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that.
//   Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.



//6. Beautify your html page with css, add sources and alts to each of the images.

//7. Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source 
//   (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries (hint: Object.keys(objectName) 
//   gives you an array containing the keys). Then write a function which places an image at the corresponding li element. 
//   Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. 
//   (Hint: you could give each li item an id tag by modifying the function you made before)
*/