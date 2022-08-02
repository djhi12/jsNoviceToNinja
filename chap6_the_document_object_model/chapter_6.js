/*
What is the DOM?
*/

/*
History of the DOM
*/

/*
An Example Web Page
*/

/*
Getting Elements
*/
const body = document.body;
const head = document.head;
console.log(body); // 
console.log(typeof body); // object
document.getElementById("body").innerHTML = body;


/* 
HTML DOM nodeType Property 
1. nodeType property to find out what type of node it is:
*/
console.log(body.nodeType); // 1
console.log(head.nodeType); // 1
// console.log(header.nodeType); // Uncaught ReferenceError: header is not defined


/*
HTML DOM nodeName Property
1. nodeName property to find the name of the element:
*/
console.log(body.nodeName); // BODY
console.log(head.nodeName); // HEAD


/*
Legacy DOM Shortcut Methods
*/

/*
HTML DOM body Property
1. Document.body returns the body element of a web page, as we saw in the previous example.
*/
document.body.style.backgroundColor = "Yellow";


/*
Document.images
1. Document.images returns a node list of all the images contained in the document.
*/
console.log(document.images); // HTMLCollection [] length: 0











// const h1 = document.getElementById('title');
// Document.form
// var selectForm = document.forms[index]; // Uncaught ReferenceError: index is not defined
// var selectFormElement = document.forms[index].elements[index]; // Uncaught ReferenceError: index is not defined
// var formResult = selectForm + selectFormElement; // Uncaught ReferenceError: selectForm is not defined
// console.log(formResult); // Uncaught ReferenceError: formResult is not defined

