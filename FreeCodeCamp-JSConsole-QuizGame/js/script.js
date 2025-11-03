
const questions = [];

let question1 = {
    category: "Food",
    question: "Which fruit is known for having its seeds on the outside?",
    choices: ["Apple", "Strawberry", "Banana"],
    answer: "Strawberry"
};

let question2 = {
    category: "Animals",
    question: "What animal is famously slow and hangs upside down in trees?",
    choices: ["Koala", "Lemur", "Sloth"],
    answer: "Sloth"
};

let question3 = {
    category: "Pop Culture",
    question: "Who lives in a pineapple under the sea?",
    choices: ["SpongeBob SquarePants", "Nemo", "Patrick Star"],
    answer: "SpongeBob SquarePants"
};

let question4 = {
    category: "Geography",
    question: "Which country is shaped like a boot?",
    choices: ["Spain", "Italy", "Greece"],
    answer: "Italy"
};

let question5 = {
    category: "Space",
    question: "What planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    answer: "Mars"
};

questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
questions.push(question5);

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomQuestion = (questionsArray) => questionsArray[getRandomInteger(0, questionsArray.length - 1)];

const getRandomComputerChoice = (choicesArray) => choicesArray[getRandomInteger(0, choicesArray.length - 1)];

const getResults = (questionObj, computerChoice) => {
    if (questionObj.answer == computerChoice) {
        return "The computer's choice is correct!";
    }

    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
}
