/**
 * 
 * @param {*} question 
 * @param {*} answer 
 * @returns 
 */

function askQuestion(question, answer) {
    let response = prompt(question).toLowerCase;
    if (parseInt(response)) {
        response = parseInt(response);
    if (response === answer) {
        return true;
    } else {
        return false;
    }
}

// let isCorrect = askQuestion('What is my favorite food?', 'Pizza');
// console.log(isCorrect);

let questions = ['What is my favorite food?', 'What is the year?', '', ''];
let answers = ['Pizza', '2023'];

for (let i = 0; i < questions.length; i++) {
    let isCorrect = askQuestion(questions[i], answers[i]);
    if isCorrect {
        alert('Awesome!');
    } else {
        alert('Wrong!');
    }
}
