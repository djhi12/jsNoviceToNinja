const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Spider Man', 'Doctor Strange', 'Thanus', 
'Black Panther', ' ',];
const justiceLeague = ['Wonder Woman', 'Aquaman', 'Superman', 'Flash', 'Steppenwolf'];
const superHeroes = [avengers, justiceLeague];


//document.getElementById('output','output_1').innerHTML = avengers + justiceLeague.sort();
//document.getElementById('output').innerHTML = avengers.reverse();
//document.getElementById('output').innerHTML = avengers.sort();

console.log(avengers);
console.log(superHeroes);

/*
...spread operator
1. The spread operator that we met earlier can be used to flatten multi-dimensional arrays. Flattening an array 
involves removing all nested arrays so all the values are on the same level in the array.
*/
console.log(...avengers, ...justiceLeague);

//const avengers_1 = ['Ant man', 'Wonderwoman', 'Batman'];
//delete avengers[0], delete avengers[1];

/*
 .length property / Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 1. The length property of an object which is an instance of type Array sets or returns the number of elements in 
 that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index 
 in the array.
 */
console.log(avengers.length);


/*

 */
console.log(avengers.length -1);



console.log(avengers.length = 100);


/*
pop() method / Source: https://www.w3schools.com/jsref/jsref_pop.asp
1. The pop() method removes the last element of an array, and returns that element.
2. Note: This method changes the length of an array.
3. Tip: To remove the first element of an array, use the shift() method.
*/
console.log(avengers.pop());


/*
shift method / Source: https://www.w3schools.com/jsref/jsref_shift.asp
1. The shift() method removes the first item of an array.
2. Note: This method changes the length of the array.
3. Note: The return value of the shift method is the removed item.
4. Tip: To remove the last item of an array, use the pop() method.
5. Note: this method will change the original array.
*/
console.log(avengers.shift());


/*
push method / Source: https://www.w3schools.com/jsref/jsref_push.asp
1. The push() method adds new items to the end of an array, and returns the new length.
2. Note: The new item(s) will be added at the end of the array.
3. Note: This method changes the length of the array.
4. Tip: To add items at the beginning of an array, use the unshift() method.
*/
console.log(avengers.push());


/**
unshift method / Source: https://www.w3schools.com/jsref/jsref_push.asp
1. The push() method adds new items to the end of an array, and returns the new length.
2. Note: The new item(s) will be added at the end of the array.
3. Note: This method changes the length of the array.
4. Tip: To add items at the beginning of an array, use the unshift() method.
 */
console.log(avengers.unshift());
//console.log(avengers.concat(avengers_1), avengers.concat('Doctor Strange'));
//console.log(avengers.join('&'));

/*
join()method
1. turn the array into a string
*/
console.log(avengers.join());

/* 
slice() method
1. creates a subarray; effectively chopping out a slice of an original array, starting at one position and 
finishing at another. 
*/
console.log(avengers.slice(1,2));


/* 
splice() method
1. removes items from an array then inserts new items in their place.
2. The first number in the parentheses tells us the index at which to start the splice. In the example we 
started at index 3, which is the fourth item in the array ('Hulk'). The second number tells us how many items to 
remove from the array. In the example, this was just one item. 
3. used to insert values into an array at a specific index without removing any items, by indicating that zero 
items are to be removed: 
*/
console.log(avengers.splice(1, 0, 'Daniel'));


/*
reverse() method
1. We can reverse the order of an array using the reverse() method:
2. Note that this changes the order of the array permanently.
*/
console.log(avengers.reverse());


/*
sort() method
1. We can sort the order of an array using the sort() method:
2. It is alphabetical order by default for String objects. Note that this also changes the order of the array 
permanently.
*/
console.log(avengers.sort());


/*
indexOf() method
1. We can find out if an array contains a particular value using the indexOf() method to find the first occurrence
   of a value in an array.
2. If the item is in the array, it will return the index of the first occurrence of that item:
3. If the item is not in the array, it will return -1
*/
console.log(avengers.indexOf('Thanus'));


/*
include() method
1. This returns a boolean value depending on whether the array contains a particular element or not:
2. You can also add an extra parameter to indicate which index to start the search from:
*/
console.log(avengers.includes('Thanus')); //true


/*
set
1. Sets were introduced to the specification in ES6.
2. A set is a data structure that represents a collection of unique values, so it cannot include any duplicate 
values. They are similar in concept to a mathematical set, although (for the time being at least) they don't 
contain mathematical set operations such as union, intersection and product.
3. Sets offer a useful way to keep track of data without having to check if any values have been duplicated. 
It's also quick and easy to check if a particular value is in a set, which can be a slow operation if an array 
is used.
*/

let narutoCharacters = new Set();
// other way
// narutoCharacters.add('Naruto');
// narutoCharacters.add('Kakashi');
// narutoCharacters.add('Sasuke');
// narutoCharacters.add('Sakura');

// other way
// Multiple items can be added to the set by repeating the add() method:
narutoCharacters.add('Naruto').add('Kakashi').add('Sasuke').add('Sakura');

// other way
narutoCharacters = new Set(['Naruto', 'Kakashi', 'Sasuke', 'Sakura']);

// other way
// let narutoCharacters = new Set().add('Naruto).add('Kakashi').add('Sasuke').add('Sakura'));

// other way
/*
1. All non-primitive values, such as arrays and objects, are considered unique values, even if they contain the 
same values. On the face of it, this appears to allow duplicate values appear in a set:
*/
 narutoCharacters = new Set().add([1]).add([2]).add([3]);

console.log(narutoCharacters);
document.getElementById('naruto').innerHTML = narutoCharacters;


/*
size() method / Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
1. The number of values in a set can be found using the size() method:
*/
console.log(narutoCharacters.size); //3


/*
has() method / Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
1. The has() method can be used to check if a value is in a set. This returns a boolean value of true or false :
*/
console.log(narutoCharacters.has('Kiba')); //false


/*
delete() method / Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
1. The delete() method can be used to remove a value from a set. This returns a boolean value of true if the value 
was removed from the set, or false if the value wasn't in the set and couldn't be removed:
*/
console.log(narutoCharacters.delete('Pain')); //false


/*
clear() method / Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear
1. The clear() method can be used to remove all values from a set:
*/
console.log(narutoCharacters.clear()); //undefined


/*
Converting Sets to Arrays
1. A set can be converted into an array by placing the set, along with the spread operator directly inside an 
array literal.
*/
const bleachCharacters = new Set().add('Ichigo').add('Rukia').add('Yoruichi').add('Kisuke');
console.log(bleachCharacters);
//other way
//const bleachCharacters_1 = [...bleachCharacters];
const bleachCharacters_1 = Array.from(bleachCharacters);
console.log(bleachCharacters_1);


/*
By combining this use of the spread operator with the ability to pass an array to the new Set() constructor, we 
now have a convenient way to create a copy of an array with any duplicate values removed:
 */
const pokemonCharacters = ['Ash', 'Serena', 'Misty', 'Iris', 'Dawn', 'Ash', 'Serena', 'Misty', 'Iris'];
console.log(pokemonCharacters);
const nonDuplicatePokemonCharacters = [...new Set(pokemonCharacters)];
console.log(nonDuplicatePokemonCharacters);


/*
Weak Sets
1. When objects are added to sets, they will be stored there as long as the set exists, even if the original 
reference to the object is removed. The technical term for this is the object is prevented from being 
garbage-collected, which can cause a memory leak.
*/
//pokemonCharacters = null; //Error:Assignment to constant variable.
const pokemonCharacters_1 = new Set().add(pokemonCharacters);
console.log(pokemonCharacters_1);


/*
Memory Leaks
1. A memory leak occurs when a program retains references to values that can no longer be accessed in its memory. 
This means that memory is being used to store values that are no longer required by the program, effectively 
wasting system resources.
2. Memory leaks can cause problems by gradually reducing the overall memory available, which can cause the program, 
or even the entire system, to run more slowly.
3. 
*/
const animals = ['Cats', 'Dogs', 'Snake', 'Tiger'];
const weak = new WeakSet();
console.log(animals);
weak.add(animals);
console.log(weak);
weak.has(animals);
console.log(animals);
weak.delete(animals);
console.log(animals);
weak.has(animals);
console.log(animals);


/*
Creating Maps
1. Objects are limited to using strings for key values, whereas maps can use any data type as a key.

2. There is no efficient way to find the number of key-value pairs an object has, whereas this is easy to do 
with maps using the size property.

3. Objects have methods that can be called (see Chapter 5) and prototypes that can be used to create a chain 
of inheritance (see Chapter 12), whereas maps are solely focused on the storage and retrieval of key-value pairs.

4. The value of an object's properties can be accessed directly, whereas maps restrict you to using the get() 
method to retrieve any values.
*/

const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);


/*
Map Methods
1. A map is a bit like a dictionary where you can look up a value based on the key. To look up a value, we can 
use the get() method:
*/

console.log(romanNumerals.has(1)); //true
console.log(romanNumerals.has(7)); //false


/*
1. A map can be created with multiple values by using a nested array as a parameter:

2. The number of key and value pairs in a map can be found by querying the size property:
*/
const animeCharacters = new Map([['Himawari', 'Sarada', 'Boruto', 'Sasuke', 'Naruto'], 
['Sena', 'Yoichi', 'Suzuna', 'Ryokan']]);
console.log(animeCharacters);
console.log(animeCharacters.size);


/*
Removing Entries From Maps
1. The delete() method can be used to remove a key and value pair from a map. This returns a boolean value of 
true if the value was removed or false if it wasn't in the map.
2. To delete a specific value, you need to specify the key in parentheses:
*/
console.log(animeCharacters.delete('Orochimaru')); //false
console.log(animeCharacters.delete('Himawari')); //true


/*
clear() method
1. The clear() method will remove all key and value pairs from a map:
*/
console.log(animeCharacters.clear()); //undefined
console.log(animeCharacters.size); //0


/*
Converting Maps to Arrays
1. Maps can be converted into a nested array of key-value pairs in a similar way to sets; using either the 
spread operator:
*/
console.log(...romanNumerals);
console.log(Array.from(romanNumerals));


/*
Weak Maps
1. eak maps work in the same way as weak sets. They are the same as maps, except their keys cannot be primitives, 
and the garbage collector will automatically remove any dead entries when the reference to the original object is 
deleted.
*/
const Weak = new WeakMap();
console.log(Weak);


/*
if Statements
1. The code inside the block will only run if the condition in parentheses is true.
2. 
*/
let notice;
const age = 12;
if (age < 18) {
notice = 'Sorry, you are not old enough to play this game';
console.log(notice);
}


/*
 else Statements
1. The else keyword can be used to add an alternative block of code to run if the condition is false.
*/
let noticed;
const aged = 20;
if (aged < 18) {
   noticed = 'Sorry, you are not old enough to play this game';
} else {
   noticed = 'You\'re old enough to play this game';
}
console.log(noticed);



const n = 12;
if (n%2 === 0) {
console.log('n is an even number');
} else {
console.log('n is an odd number');
}
//<< 'n is an even number'


/*
Ternary Operator
1. A shorthand way of writing an if ... else statement is to use the ternary operator, ? , which takes 
three operands in the following format:
2.
*/

/*
condition ? (//code to run if condition is true) : (//code to run if condition is false)
*/

/*
const n = 5;
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');
//<< 'n is an odd number'
*/


/*
 Switch Statements
 1. 
*/
const number = 4;
if (number === 4) {
   console.log('You rolled a four');
   } else if (number === 5) {
   console.log('You rolled a five');
   } else if(number === 6){
   console.log('You rolled a six');
   } else {
   console.log('You rolled a number less than four');
   }


   switch (number) {
      case 4:
      console.log('You rolled a four');
      break;
      case 5:
      console.log('You rolled a five');
      break;
      case 6:
      console.log('You rolled a six');
      break;
      default:
      console.log('You rolled a number less than four');
      break;
  }


  /*
  while loops
  */
  let bottles = 10;
  while (bottles > 0){
      console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should 
      accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
      bottles--;
  }

  const otherLoop = 'Other Loops';
  console.log(otherLoop);

  let bottles_1 = 11;
while (--bottles_1){
    console.log(`There were ${bottles_1} green bottles, hanging on a wall. And if one green bottle should 
    accidentally fall, there'd be ${bottles_1-1} green bottles hanging on the wall`);
}


/*
infinite loops
1. It is important that the condition in a while loop will be met at some point, otherwise your code will get 
stuck in an infinite loop that could possibly crash the program.
2. 
*/

/*
let m = 1;
while(m > 0){
    console.log('Hello');
    m++;
}
*/


const otherLoop_1 = 'Other Loops';
console.log(otherLoop_1);


/*
do ... while Loops
1. A do ... while loop is similar to a while loop. The only difference is that the condition comes after the 
block of code:
2. This means that the block of code will always be run at least once, regardless of the condition being true 
or not.
 */
let bottles_2 = 10;
do {
    console.log(`There were ${bottles_2} green bottles, hanging on a wall. And if one green bottle should 
    accidentally fall, there'd be ${bottles_2-1} green bottles hanging on the wall`);
    bottles_2--;
} while (bottles_2 > 0)


const otherLoop_2 = 'Other Loops';
console.log(otherLoop_2);


/*
For Loops
1. For loops are probably the most commonly type of loop used in JavaScript
2. The initialization code is run before the loop starts and is usually employed to initialize any variables 
used in the loop. The condition has to be satisfied for the loop to continue. 
3. The after code is what to do afte reach iteration of the loop, and it is typically used to increment a 
counter of some sort.
*/
for (let bottles_3 = 10 ; bottles_3 > 0 ; bottles_3--) {
   console.log(`There were ${bottles_3} green bottles, hanging on a wall. And if one green bottle should 
   accidentally fall, there'd be ${bottles_3-1} green bottles hanging on the wall`);
} 


const otherLoop_3 = 'Other Loops';
console.log(otherLoop_3);


let bottles_4 = 10; // bottles is initialized here instead
for ( ; bottles_4 > 0 ; ) { // empty initialization and increment
console.log(`There were ${bottles_4} green bottles, hanging on a wall. And if one green bottle should 
accidentally fall, there'd be ${bottles_4-1} green bottles hanging on the wall`);
bottles_4--; // increment moved into code block
}


/*
nested for loops

*/
for(let i=1 ; i<13 ; i++){
for(let j=1 ; j<13 ; j++){
    console.log(`${j} multiplied by ${i} is ${i*j}`);
    }
}



/*
Looping over Arrays
1. A for loop can be used to iterate over each value in an array. If we take our avengers array example from 
earlier, we can create a for loop that outputs each item in the array to the console using the following loop:
2. MAX is a variable.
3. 
*/
for(let i=0, max=avengers.length; i < max; i++){
    console.log(avengers[i]);
    }

/*
1. ES6 introduced an improved iterator function for arrays called a for-of loop that uses a slightly different 
syntax:
2. 
*/
for(const value of avengers){
    console.log(value);
    }


/*
Looping Over Sets
1. Sets are enumerable, which means they have methods that allow you to loop over each value in the set. 
2. The loop will iterate over each value in the same order they were added to the set. 
*/
const letters = new Set('hello');
for(const letter of letters) {
    console.log(letter);
}


/*
Looping Over Maps
1. Maps are also enumerable, so it's also possible to loop over a map in a similar way to a set. 
2. The loop will iterate over each key-value pair in the same order as they were added to the map.
*/
const romanNumerals_1 = new Map();
romanNumerals_1.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
for(const key of romanNumerals_1.keys()) {
    console.log(key);
}

const romanNumerals_2 = new Map();
romanNumerals_2.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
for(const value of RomanNumerals_2.values()) {
    console.log(value);
}

/*
for(const [key,value] of RomanNumerals.entries()) {
    console.log(`${key} in Roman numerals is ${value}`);
}
*/


























//const mixedArray = [ null, 1, [], 'two', true ];
//console.log(mixedArray);