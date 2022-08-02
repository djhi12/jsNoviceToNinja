/*
Improving the mean() Function
1. Earlier in the chapter we created a mean() function that would calculate the mean of any number 
of arguments. We can improve on this by using the reduce() method to add up all the values provided:
*/
function mean(array) {
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}

/*
1. Our next improvement will be to add a callback as the last parameter that specifies a function to 
be applied to all the numbers before the mean is calculated. This will allow us to work out things 
such as the mean of all numbers if they were doubled or squared.
*/

// Here is the code for the improved function that accepts a callback:
function mean(array,callback) {
    if (callback) {
    array.map( callback );
    } 
    const total = array.reduce((a, b) => a + b);
    return total/array.length;
}

console.log(mean([2,5,7,11,4])); // 5.8

/*
1. Now let’s use an anonymous arrow function to double all the numbers before calculating the mean:
*/
console.log(mean([2,5,7,11,4],x => 2 * x)); // 5.8 // supposed answer: 11.6

/*
1. Last of all, let’s use the square function we wrote earlier in this chapter as a callback to 
square all the numbers before calculating the mean:
*/
console.log(mean([2,5,7,11,4],square)); // 5.8 // supposed answer 43


/********************************************************************************************************** */

// Quiz Ninja Project

/*
1. The first part of this code remains the same ― we create a map of questions and answers and 
store it in the quiz variable.
*/
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

//  This is the main game function that contains all the steps of playing the game.
// This function also contains a number of functions that help to describe how the game runs.
//  It starts by initializing a variable called score to 0.
// 
function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        // After this, it iterates over the quiz array and invokes the ask() function for each question. 
        const response = ask(question);
        // We then, invoke the check() function to check if the player's response is correct.
        check(response,answer);
    }

    /*
    1. After we have looped through every question in the quiz array, the game is over, so the 
    gameOver() function is invoked.
    */
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

/*
1. This invokes the start() function with the quiz variable passed to it as an argument. This 
is required to actually start the quiz!
*/
start(quiz);


