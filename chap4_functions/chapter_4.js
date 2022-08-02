/*
Function Declarations 
1. To define a function literal we can use a function declaration:
2. This starts with the function keyword and is followed by the name of the function, which in this case is 
called ' hello ', followed by parentheses.
3. Following this is a block that contains the code for the function.
4. This is known as a named function as the function has a name: ' hello '.
*/

/*
function hello(){
    console.log('Hello World!'); 
}
hello();
*/

/*
Function Expressions
1. Another way of defining a function literal is to create a function expression. This assigns ananonymous 
function to a variable:
2. The function in this example is known as an anonymous function because it doesn't have a name; it is simply 
created, then assigned to the variable goodbye.
3. 
*/

/*
const goodbye = function(){
    console.log('Goodbye World!');
};
*/

/*
1. Alternatively, we can create a named function expression instead:
*/


const goodbye_1 = function bye(){
    console.log(bye());
};


/*
Function() Constructors
1. A function can also be declared using the constructor Function() . The body of the function is 
entered as a string, as shown in this example:
 */

//const hi = new Function('console.log("Hi World!");');

/*
Invoking a Function
1. Invoking a function is to run the code inside the function’s body. To invoke a function, simply 
enter its name, followed by parentheses. This is how we’d invoke the hello function:
*/


function hello(){
    console.log('Hello World!'); 
}
hello();

const goodbye_2 = function goodbye_2(){
    console.log('Goodbye World!'); 
};
goodbye_2();


/*
1. Remember: you need parentheses to invoke a function ― either by name or by reference to the 
variable it is assigned to.
2.  If you skip the parentheses, you are simply referencing the function itself rather than 
invoking it, as you can see here:
*/


//goodbye;


/*
1. All that has been returned is the function definition that the variable goodbye is pointing 
to, rather than running the code. This can be useful if you want to assign the function to another 
variable, like so:
*/

//seeya = goodbye;


/*
1. Now the variable seeya also points to the function called bye and can be used to invoke it:
*/

//seeya();


/*
Return Values
1. All functions return a value, which can be specified using the return statement, which comes 
after the return keyword.
2. A function that doesn’t explicitly return anything (such as all the examples we have seen 
so far) will return undefined by default.
*/

/*
1. The function in this example will return the string 'Howdy World!':
2. 
*/
function howdy(){
    return 'Howdy World!';
}
console.log(howdy());

/*
1. This means we can now assign a function invocation to a variable, and the value of that 
variable will be the return value of that function:
*/
const message = howdy();


/*
Parameters and Arguments
1. Parameters and arguments are terms that are often used interchangeably to represent values 
provided for the function as an input. 
2. There is a subtle difference though: any parameters a function needs are set when the 
function is defined. When a function is invoked, it is provided with arguments.
*/

/*
1. To see an example of a function that uses parameters, we'll create a function that squares numbers.
2. In the example that follows, the square function takes one parameter, x , which is the number to be squared.
3. In the body of the function, the name of the parameter acts like a variable equal to the value that 
is provided when the function is invoked.
4. As you can see, it is multiplied by itself and the result is returned by the function:
*/
function square(x){
    return x*x;
}

/*
1. When we invoke this function, we need to provide an argument, which is the number to be squared:
*/
console.log(square(4.5));


/*
1. You can use as many parameters as you like when defining functions. For example, the following 
function finds the mean of any three numbers:
*/
function mean(a,b,c){
    return (a+b+c)/3;
}
console.log(mean(1, 3, 6,));


/*
Variable Numbers of Arguments
1. Every function has a special variable called arguments . This is an array-like object that 
contains every argument passed to the function when it is invoked. 
2. We can create a simple function called arguments() that will return the arguments object 
so we can see what it contains:
*/
function arguments(){
    return arguments;
}
arguments('hello', NaN);
console.log(arguments());

arguments(1,2,3,4,5);
console.log(arguments());


/*
1. A much better option is to use the rest operator. This was introduced in ES6 and can be used 
to deal with multiple arguments by creating an array of arguments that are available inside the 
body of the function.
*/

/*
1. To use the rest operator, simply place three dots in front of the last parameter in a function 
declaration. This will then collect all the arguments entered into an array. 
*/
function rest(...args){
    return args;
}

/*
1. The args parameter is an actual array, and has access to the same methods. For example we 
can use a for-of loop to iterate over each value given as an argument:
*/
function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}
rest(2,4,6,8)


/*
Improved Mean Function
1. We can use a rest parameter to improve our mean() function so it accepts any number of values:
*/
function mean_1(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total/values.length;
}

console.log(mean_1(2,8,13,11,4,2)); //6.66666666666667


/*
Default Parameters
1. ES6 introduced a convenient way to specify default parameters for a function. These are values 
that will be used by the function if no arguments are provided when it is invoked.
2. To specify a default parameter, simply assign the default value to it in the function definition:
*/
function hello(name = 'World'){
    console.log(`Hello ${name}!`);
}

// Now if we call this function without an argument, it will use 'World' as the name parameter:
// We can override the default value, by specifying our own argument:
hello('Universe');


/*
1. Default parameters should always come after non-default parameters, otherwise default 
values will always have to be entered anyway. 
2. This function takes two arguments: the price of an item and the percentage discount to be applied. 
The store’s most common discount is 10%, so this is provided as a default value. This means that the 
amount argument can be omitted in most cases and a 10% discount will still be applied:
*/
function discount(price, amount = 10) {
    return price*(100 - amount) / 100;
}
/*
1. If a different discount is applied, the amount argument can be provided:
*/
console.log(discount(15, 20));



/*
Arrow Functions
1. These make declaring functions much more succinct by using less verbose syntax.
2. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
3. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
The parameters come before the arrow and the main body of the function comes after. 
4. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
The parameters come before the arrow and the main body of the function comes after. 
Arrow functions are always anonymous, so if you want to refer to them, you must assign them to a variable.
*/

// For example, the square function we wrote earlier can be written like so:
const square_1 = x => x*x;

//Multiple parameters need to go inside parentheses, for example, the following function adds two numbers together:
const add = (x,y) => x + y;


//If the function doesn't require any parameters, a pair of empty parentheses must go before the arrow:
const hello_1 = () => alert('Hello World!');


/*
1. Longer functions will still require curly braces to deliminate the body of the function and 
the return keyword at the end, as can be seen in this (rather simplistic) tax-calculating function:
*/
const tax = (salary) => {
    const taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    taxable = taxable - 20000;
    const higherRate = 0.4 * taxable;
    return lowerRate + higherRate;
}
console.log(tax);


/*
Function Hoisting
1. Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations 
to the top of the current scope, regardless of where they are defined.
2. Functions that are defined using a function declaration are automatically hoisted, meaning they 
can be invoked before they have been defined.
*/

// function is invoked at the start of the code
hoist();
// ...
// ... lots more code here
// ...
// function definition is at the end of the code
function hoist(){
    console.log('Hoist Me!');
}


/*
Variable Hoisting
1. Variable declarations that use the var keyword are automatically moved to the top of the current scope.
2. Variable assignment is not hoisted, however. This means that a variable assigned at the end of a 
function will have a value of undefined until the assignment is made:
*/

/* It’s better practice to use const and let to declare any variables at the beginning of a block so 
hoisting is unnecessary.
*/
console.log(name); // will return undefined before assignment
// variable is defined here
var name = 'Alexa';
console.log(name); // will return 'Alexa' after assignment


// the variable helloExpression has a value of undefined, so the function cannot be invoked
//helloExpression(); // throws an error
// the function declaration can be invoked before it is declared
helloDeclaration(); // returns 'hello'
// assign function expression to a variable
var helloExpression = function() { 
    console.log('hello') 
}
// declare function declaration
function helloDeclaration() {
    console.log('hello') 
}
// The function expression can only be invoked after assignment
helloExpression(); // returns 'hello'


/*
Callbacks
1. This means that functions can also be given as a parameter to another function.
2. A function that is passed as an argument to another is known as a callback.
*/


function sing(song) {
    console.log(`I'm singing along to ${song}`);
}
sing('Let It Go') //'I'm singing along to Let It Go'
sing('Let It Go',dance);

// The callback is provided as a parameter, then invoked inside the body of the function.
function sing_1(song,callback) {
    console.log(`I'm singing along to ${song}.`);
    return callback(song, callback);
}

function dance() {
    console.log("I'm moving my body to the groove."); 
    //( We’re just logging a simple message to the console in these examples, but these functions could be used to do anything in a practical sense.)
    }

sing_1('Let It Go, Let it go',dance);

/*
1. It is possible to check if an argument is a function using the following code:
*/
/*
if(typeof(callback) === 'function'){
    callback();
}
*/


function dance() {
    console.log("I'm moving my body to the groove."); 
    //( We’re just logging a simple message to the console in these examples, but these functions could be used to do anything in a practical sense.)
    }


sing('Let It Go',()=>{ console.log("I'm standing on my head.");});


/*
Sorting Arrays With A Callback
1. In the last chapter we saw that arrays have a sort() method that sorted the items in the 
array into alphabetical order. This is fine for strings, but you might recall that it didn't 
work so well for numbers:
*/

//This function can now be used as a callback in the sort() method to sort the array of numbers correctly:
const numbersArray =  [1, 3, 12, 5, 23, 18, 7].sort(numerically);
console.log(numbersArray);

/*
1. This simply subtracts the two numbers that are being compared, giving a result that is either 
negative (if b is bigger than a ), zero (if a and b are the same value), or positive (if a is bigger than b ).
*/
function numerically(a, b) {
    return a - b;
}

/*
overflow errors
1. In some rare instances where an array includes some very large and negative numbers, an 
overflow error can occur and the result of a-b becomes smaller than the smallest number 
that JavaScript is able to cope with. If this is the case, the following function can be 
used as a callback instead:
*/
function numerically (a, b){
    if (a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    } else {
        return 0;
    }
}
console.log(numerically(1,2));


/*
Array Iterators
1. Arrays have a number of methods that utilize callbacks to make them more flexible.
*/


/*
forEach()
1. 
*/
const colors = ['Red', 'Green', 'Blue']
for(let i = 0, max = colors.length ; i < max ; i++ ) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}
//'Color at position 0 is Red'
//'Color at position 1 is Green'
// 'Color at position 2 is Blue'

{
    const otherLoop = 'Other Loop';
    console.log(otherLoop);
}

/*
1. An alternative is to use the forEach() method. This will loop through the array and invoke a 
callback function using each value as an argument.
2. The callback function takes three parameters, the first represents the value in the array, 
the second represents the current index and the third represent the array that the callback is being called on. 
*/
colors.forEach( (color,index) =>
    console.log(`Color at position ${index}  is ${color}`) );



/*
map()
1. The map() method is very similar to the forEach() method. It also iterates over an array, and 
takes a callback function as a parameter that is invoked on each item in the array. This is often 
used to process data returned from databases in array form, such as adding HTML tags to plain text.
2. The difference is that it returns a new array that replaces each value with the return value of
the callback function.
*/

/* 
1. For example, we can square every number in an array using the square function we wrote previously as 
a callback to the map() method:
*/
const numberArray = [1,2,3].map( square );
console.log(numbersArray); // 1, 3, 5, 7, 12, 18, 23

// An anonymous function can also be used as a callback. This example will double all the numbers in the array:
const numberArray_1 = [1,2,3].map(x => 2 * x);
console.log(numberArray_1); // 2, 4, 6

// The next example takes each item in the array and places them in uppercase inside paragraph HTML tags:
const colorArray = ['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` );
console.log(colorArray);
document.getElementById("colorArray").innerHTML = colorArray;


/*
1. Notice in this and the previous example, the anonymous function takes a parameter, color , 
which refers to the item in the array. This callback can also take two more parameters ― 
the second parameter refers to the index number in the array and the third refers to the array itself.
2. It's quite common for callbacks to only used the first, index, parameter, but the next 
example shows all three parameters being used:
*/
const colorArray_1 = ['red','green','blue'].map( (color, index, array) => `Element ${index} is ${color}. 
There are ${array.length} items in total.` );
console.log(colorArray_1);


/*
Reduce()
1. The reduce() method is another method that iterates over each value in the array, but this time it 
cumulatively combines each result to return just a single value.
2.  The callback function is used to describe how to combine each value of the array with the 
running total. This is often used to calculate statistics such as averages from data stored in 
an array. It usually takes two parameters. The first parameter represents the accumulated value 
of all the calculations so far, and the second parameter represents the current value in the array. 
The following example shows how to sum an array of numbers:
*/
const number_4 = [1,2,3,4,5].reduce( (acc,val) => acc + val );
console.log(number_4); // 15

/*
1. The reduce() method also takes a second parameter after the callback, which is the initial value 
of the accumulator, acc . For example, we could total the numbers in an array, but starting at 10, instead of zero:
*/
const number_5 = [1,2,3,4,5].reduce( (acc,val) => acc + val,10); // <---- second parameter of 10 here
console.log(number_5); // 25

// Another example could be to calculate the average word length in a sentence:
const sentence = 'The quick brown fox jumped over the lazy dog';
console.log(sentence); // The quick brown fox jumped over the lazy dog

//
const sentence_1 = 'The quick brown fox jumped over the lazy dog';
const sentence_2 = sentence_1.split();
console.log(sentence_2); // ["The quick brown fox jumped over the lazy dog"]

const sentence_3 = sentence_1.split(" ");
console.log(sentence_3); // ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

/* 
const totalWords = sentence.reduce((acc,word) => acc + word.length, 0);
console.log(totalWords); // sentence.reduce is not a function
*/


/*
Filter()
1. The filter() method returns a new array that only contains items from the original array that 
return true when passed to the callback.
*/
// For example, we can filter an array of numbers to just the even numbers using the following code:
const numbers = [ 2, 7, 6, 5, 11, 23, 12 ];
console.log(numbers.filter(x => x % 2 === 0 )); // this returns true if the number is even // 2, 6, 12
//console.log(numbers); // 2, 7, 6, 5,11, 23, 12


// The filter() method provides a useful way of finding all the truthy values from an array:
const array = [ 0, 1, '0', false, true, 'hello' ];
console.log(array.filter(Boolean)); // [1, "0", true, "hello"]

// To find all the falsy values, the following filter can be used:
console.log(array.filter(x => !x)); // [0, false]


/*
Chaining Iterators Together
1. The various iterator functions can be used in combination to create some powerful transformations 
of data stored in arrays. This is achieved by a process called chaining methods together.
2. Chaining works because the iterator functions return an array, which means that another iterator 
function can then be chained on to the end and it will be applied to the new array.
*/

/* For example, we can calculate the sum of square numbers using the map() method to square 
each number in the array and then chain the reduce() method on the end to add the results together:
*/
const numbers_1 = [1,2,3].map( x => x*x ).reduce((acc,x) => acc + x );
console.log(numbers_1); // 14


/*
1. Another more complex example could be used to take an array of orders, apply a sales tax to 
them using map() and then use reduce() to find the total:
*/
const sales = [ 100, 230, 55];
const sales_1 = totalAfterTaxSales = sales.map( (amount) => amount * 1.15 ).reduce( (acc,val) => acc + val );
console.log(sales_1); // 442.75



