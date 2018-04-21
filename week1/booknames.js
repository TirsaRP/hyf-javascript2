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
var h2= document.createElement("h2");
h2.setAttribute("class", "classname"); 
document.body.appendChild(h2);
document.getElementsByClassName("classname")[0].innerHTML= "List of Book Id's";  //All of this makes a <h2> with text

var list = document.createElement("UL");    
list.setAttribute("id", "libro");
document.body.appendChild(list);                                    //ALL of this makes a <ul> on my webpage   

function bookList() {
    for (var i = 0; i < bookNamesArr.length; i++) {                 //becasuse i want this to run through the array
        var listItem = document.createElement("LI");                //creates <li>
        var itemText = document.createTextNode(bookNamesArr[i]);    //creates text using the array
        listItem.appendChild(itemText);                             //appends the text to  <li>
        document.getElementById("libro").appendChild(listItem);     //appends-adds <li> to the DOM
    }
}

bookList(); //WORKS!
/*
function bookList2() {
    for (var i = 0; i < bookNamesArr.length; i++) {
        var listItems2 = document.createElement("LI");                              //creates li
        listItems2.setAttribute("class", "name");                                   //gives li class name of "name"
        document.getElementsByClassName("name").innerHTML = bookNamesArr[i];        //makes the content inside each li
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
*/

//4. Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up 
//   in point 1 as a key, and it should have at least the following fields: title, language and author.

var bookNamesArr2 = [
    { id: "love_actually", title: "Love Actually", language: "English", author: "James Smith" },
    { id: "beloved", title: "Beloved", language: "English", author: "Bob Jones" },
    { id: "twisted", title: "Twisted", language: "English", author: "Laurie Andersen" },
    { id: "explosion", title: "Explosion", language: "English", author: "John Bacon" },
    { id: "food_godess", title: "Food Godess", language: "Spanish", author: "Maria Gonzales" },
    { id: "queen_bee", title: "Queen Bee", language: "Spanish", author: "Rosa Lopez" },
    { id: "motherhood", title: "Motherhood", language: "Swedish", author: "Malin Larsson" },
    { id: "parents_guide", title: "Parent's Guide", language: "Swedish", author: "Ove Andersson" },
    { id: "wonderland", title: "Wonderland", language: "English", author: "Jack Banner" },
    { id: "peter_pan", title: "Peter Pan", language: "Swedish", author: "James Barrie" },
];

//5. Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that.
//   Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

var h22= document.createElement("h2");
h22.setAttribute("class", "classname"); 
document.body.appendChild(h22);
document.getElementsByClassName("classname")[1].innerHTML= "List of Books:";     //All of this makes a <h2> with text

var list3 = document.createElement("UL");
list3.setAttribute("id", "libro2");
document.body.appendChild(list3);                                   //ALL of this makes "list of books" appear as a ul name on my webpage

function bookList5() {
    for (var i = 0; i < bookNamesArr2.length; i++) {                                 //because i want this to run through the array
        var listItemT = document.createElement("h3");                                //creates <h3>
        var itemTextT = document.createTextNode(bookNamesArr2[i].title);             //creates text using the array title:
        listItemT.appendChild(itemTextT);
        var listItemL = document.createElement("LI");                                //creates <li>
        var itemTextL = document.createTextNode(bookNamesArr2[i].language);          //creates text using the array language:
        listItemL.appendChild(itemTextL);
        var listItemA = document.createElement("LI");                                //creates <li>
        var itemTextA = document.createTextNode(bookNamesArr2[i].author);            //creates text using the array author:
        listItemA.appendChild(itemTextA);

        document.getElementById("libro2").appendChild(listItemT);    //appends-adds <h2> to the DOM
        document.getElementById("libro2").appendChild(listItemL);    //appends-adds <li> to the DOM
        document.getElementById("libro2").appendChild(listItemA);    //appends-adds <li> to the DOM
    }
}



//6. Beautify your html page with css, add sources and alts to each of the images.

//7. Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source 
//   (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries (hint: Object.keys(objectName) 
//   gives you an array containing the keys). Then write a function which places an image at the corresponding li element. 
//   Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. 
//   (Hint: you could give each li item an id tag by modifying the function you made before)

var bookNamesArr3 = [
    { id: "love_actually", img:"love_actually.jpeg", title: "Love Actually", language: "English", author: "James Smith" },
    { id: "beloved", img: "beloved.jpg", title: "Beloved", language: "English", author: "Bob Jones" },
    { id: "twisted", img: "twisted.jpg", title: "Twisted", language: "English", author: "Laurie Andersen" },
    { id: "explosion", img:"explosion.jpg", title: "Explosion", language: "English", author: "John Bacon" },
    { id: "food_godess", img:"food_godess.jpg", title: "Food Godess", language: "Spanish", author: "Maria Gonzales" },
    { id: "queen_bee", img: "queenbee.jpg", title: "Queen Bee", language: "Spanish", author: "Rosa Lopez" },
    { id: "motherhood", img:"motherhood.jpg", title: "Motherhood", language: "Swedish", author: "Malin Larsson" },
    { id: "parents_guide", img: "parents_guide.jpg", title: "Parent's Guide", language: "Swedish", author: "Ove Andersson" },
    { id: "wonderland", img: "wonderland.jpg", title: "Wonderland", language: "English", author: "Jack Banner" },
    { id: "peter_pan", img: "peter_pan.jpg", title: "Peter Pan", language: "Swedish", author: "James Barrie" },
];

function bookList5() {
    for (var i = 0; i < bookNamesArr2.length; i++) {                                 //because i want this to run through the array
        var listItemT = document.createElement("h3");                                //creates <h3>
        var itemTextT = document.createTextNode(bookNamesArr2[i].title);             //creates text using the array title:
        listItemT.appendChild(itemTextT);

        var image= document.createElement("img");
        image.setAttribute("src", bookNamesArr3[i].img);
        image.setAttribute("width", "25%");
        image.setAttribute("alt", "Book Cover");

        var listItemL = document.createElement("LI");                                //creates <li>
        var itemTextL = document.createTextNode(bookNamesArr2[i].language);          //creates text using the array language:
        listItemL.appendChild(itemTextL);
        var listItemA = document.createElement("LI");                                //creates <li>
        var itemTextA = document.createTextNode(bookNamesArr2[i].author);            //creates text using the array author:
        listItemA.appendChild(itemTextA);

        document.getElementById("libro2").appendChild(listItemT);    //appends-adds <h2> to the DOM
        document.getElementById("libro2").appendChild(image);           //THIS IS WHERE THE CONSOLE ERROR IS 
        document.getElementById("libro2").appendChild(listItemL);    //appends-adds <li> to the DOM
        document.getElementById("libro2").appendChild(listItemA);    //appends-adds <li> to the DOM
    }
}

bookList5();
