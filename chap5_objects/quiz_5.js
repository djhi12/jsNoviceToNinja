// Quiz Ninja!!!

const quiz_5 = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
];
console.log(this.quiz_5); // undefined
console.log(quiz_5);
/*
(3) [{…}, {…}, {…}]
0: {name: "Superman", realName: "Clark Kent"}
1: {name: "Wonder Woman", realName: "Diana Prince"}
2: {name: "Batman", realName: "Bruce Wayne"}
*/

const game = {
    start(quiz_5) {
        this.questions = [...quiz_5];
        this.score = 0;
        // Main game loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        // End of main game loop
        this.gameOver();
    },

    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            alert('Correct!');
            this.score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        alert(`Game Over, you scored ${this.score} point ${this.score !== 1 ? 's' :  '' }`);
    }

}


console.log(game); //
// console.log(ask()); // Uncaught ReferenceError: ask is not defined
document.getElementById("quiz_5").innerHTML = game;
console.log(game.start(quiz_5));