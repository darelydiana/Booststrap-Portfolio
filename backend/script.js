//Variables = Similar to a Pokemon Ball
studentName = "Ananswer" /*String*/
score = 9.7 /*Float*/
payrollcurrency = "$" /*Character*/
inZoomClass = true /*Boolean true or false*/
number = 72 /*Interger*/

console.error ("This is an Error")
console.log("This is a Simple Log")

console.log("Student name is:", studentName, "they have the score in Html/Css of:", score)

function rePaint() {
    console.error("This is an Error");
    alert("this is the Alert Function");
    console.log(Math.random() * 12);
    document.getElementById("body").style.color = randomColor();
}
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

/*
Function should go inside the html document, and scan the input-field for text, and if there's text, then the text will be converted into
a TextNode: which is a basically a 2D Text Layer and assign it as
child of <ul></ul>
*/
function  addTodo () {
    //Accessing the Input Field and cloning the value
    var inputFieldText = document.getElementById("myInput").value;
    console.log(inputFieldText); /*testing if we caught the Input field*/

    //create a 2D TextLayer from the Input field text, inputted by user
    var textNodeInputField = document. createTextNode (inputFieldText);

    //create an empty html list item
    var createListItemElement = document.createElement("li");

    //append the 2D text layer inside the empty list item
    createListItemElement.appendChild(textNodeInputField);

    //append the list item as a child in the html Lis
    document.getElementById("myUL").appendChild(createListItemElement);
}