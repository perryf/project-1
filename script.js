const quizQuestions = [

{question: "Where was Kevin Love selected in the 2008 NBA Draft?",

one: "1st Round, 5th Pick",/* */
two: "2nd Round, 32nd Pick",
three: "1st Round, 19th Pick",
four: "2nd Round, 48th Pick",
//answer: one
},

{question: "Kevin Love was traded to the Cleveland Cavaliers from what team?",

one: "Chicago Bulls",
two: "Memphis Grizzlies",/* */
three: "Minnesota Timberwolves",
four: "New York Knicks",
//answer: two
},

{question: "What was Kevin's number before he switched to '0'?",

one: "17",
two: "42",/* */
three: "23",
four: "56",
//answer: two
},

{question: "What NBA record did Kevin set during the November 23, 2016 game against the Portland Trailblazers?",

one: "Most points scored in a first quarter",/* */
two: "Most points scored in a game",
three: "Most consecutive free throws in a game",
four: "Most rebounds in a half",
//answer: one
},

{question: "Which one of Kevin's Teammates came up with the unofficial team mascot, 'Lil Kev'?",

one: "Lebron James",
two: "Tristan Thompson",
three: "Richard Jefferson",/* */
four: "Matthew Dellevedova",
//answer: three
},

{question: "What was Kevin's 3PT% in the 2016 NBA Playoffs?",

one: "36.7%",
two: "41.4%",/* */
three: "46.8%",
four: "34.2%",
//answer: two
},

{question: "Kevin has been an NBA All-Star ____ times and has participated in ___ All-Star games",

one: "four, four",
two: "three, one",
three: "three, two",
four: "five, three",/* */
//answer: four
},

{question: "Kevin is currently a model for which clothing brand?",

one: "J. Crew",
two: "Gap",
three: "Banana Republic",/* */
four: "AllSaints",
//answer: three
}
]

//With an array of objects, can set it to easily add more questions? Have questions and answers choices populate fields w/innerHTML? 

const oneButton = document.querySelector('.one')
const twoButton = document.querySelector('.two')
const threeButton = document.querySelector('.three')
const fourButton = document.querySelector('.four')

for (i = 0; i < quizQuestions.length; i++) {
    document.querySelector('#question .question').innerHTML = quizQuestions[i].question;
    document.querySelector('#answers .one').innerHTML = quizQuestions[i].one;
    document.querySelector('#answers .two').innerHTML = quizQuestions[i].two;
    document.querySelector('#answers .three').innerHTML = quizQuestions[i].three;
    document.querySelector('#answers .four').innerHTML = quizQuestions[i].four;
}

/*for (i = 0; i < quizQuestions.length; i++) { 
    quiz.push(quizQuestions[i]);
}; 

oneButton.addEventListener('click', () => {
    function validateAnswer () {
        if answer === document.querySelector{
            alert("Correct!");
        }
    }
*/