const quizQuestions = [

        {question: "Where was Kevin selected in the <br>2008 NBA Draft?",
        
        one: "1st Round, 5th Pick",/* */
        two: "2nd Round, 32nd Pick",
        three: "1st Round, 19th Pick",
        four: "2nd Round, 48th Pick",
        answer: "one"
        },
        
        {question: "Kevin was traded to the Cleveland Cavaliers from what team?",
        
        one: "Chicago Bulls",
        two: "Memphis Grizzlies",/* */
        three: "Minnesota Timberwolves",
        four: "New York Knicks",
        answer: "three"
        },
        
        {question: "What was Kevin's number before he switched to '0'?",
        
        one: "17",
        two: "42",/* */
        three: "23",
        four: "56",
        answer: "two"
        },
        
        {question: "What NBA record did Kevin set during the November 23, 2016 game against the Portland Trailblazers?",
        
        one: "Most points scored in a first quarter",/* */
        two: "Most points scored in a game",
        three: "Most consecutive free throws in a game",
        four: "Most rebounds in a half",
        answer: "one"
        },
        
        {question: "Which Cavs player came up with the unofficial team mascot, 'Lil Kev'?",
        
        one: "Lebron James",
        two: "Tristan Thompson",
        three: "Richard Jefferson",/* */
        four: "Matthew Dellevedova",
        answer: "three"
        },
        
        {question: "What was Kevin's 3PT% in the <br>2016 NBA Playoffs?",
        
        one: "36.7%",
        two: "41.4%",/* */
        three: "46.8%",
        four: "34.2%",
        answer: "two"
        },
        
        {question: "Kevin has been an NBA All-Star _____ times and has participated in ____ <br>All-Star games",
        
        one: "four, four",
        two: "three, one",
        three: "three, two",
        four: "five, three",/* */
        answer: "four"
        },
        
        {question: "Kevin is currently a model for which clothing brand?",
        
        one: "J. Crew",
        two: "Gap",
        three: "Banana Republic",/* */
        four: "AllSaints",
        answer: "three"
        },
    
        {question: "Which Boston Celtics player controversially dislocated Kevin's shoulder in the 2015 NBA Playoffs?",
        
        one: "Terry Rozier",
        two: "Jonas Jerebko",
        three: "Kelly Olynyk",/* */
        four: "Isaiah Thomas",
        answer: "three"
        },
    
        {question: "Who is the most underrated and underappreciated player on the Cavs?",
        
        one: "Don't get this wrong.",
        two: "<em><strong>Kevin Love</strong></em>",
        three: "Seriously don't.",/* */
        four: "NO!",
        answer: "two"
        }
        ]
        
        //With an array of objects, can set it to easily add more questions? Populate fields w/innerHTML? 
        
        //Creating the buttons
        const oneButton = document.querySelector('#answers .one')
        const twoButton = document.querySelector('#answers .two')
        const threeButton = document.querySelector('#answers .three')
        const fourButton = document.querySelector('#answers .four')
        const submitButton = document.querySelector('#submit .submit')
        
        //Creating a variable to check the answers
        let localAnswer = ""
        let i = 0
        
        //To display the number of questions correct in the counter
        let numberCorrect = 0
        var score = document.querySelector('#counter .correct')
        function addCorrect() {
            numberCorrect += 1 
            score.innerHTML = numberCorrect + "/10"
        }
    
        //Check if quiz should keep going -- if not, give player their total
        function stopQuiz() {
           if (i === 10) {
               score.innerHTML = "Finished! <br>Total: " + numberCorrect + "/10"
            } else {
               startQuiz();
           }
        }
    
        //To inform the player they got a question wrong
        function notCorrect() {
            score.innerHTML = "Wrong!"
        }
    
        //Function to run through quiz
        function startQuiz() {
        
            //Pushing the values to display in the HTML element
            document.querySelector('#question .question').innerHTML = quizQuestions[i].question;
            oneButton.innerHTML = quizQuestions[i].one;
            twoButton.innerHTML = quizQuestions[i].two;
            threeButton.innerHTML = quizQuestions[i].three;
            fourButton.innerHTML = quizQuestions[i].four;
            quizQuestions[i].answer;
            
            
            //When clicked, the variable localAnswer is set to check against the actual answer
            oneButton.addEventListener('click', () => {
                    localAnswer = "one";
            })
            twoButton.addEventListener('click', () => {
                    localAnswer = "two";
            })
            threeButton.addEventListener('click', () => {
                    localAnswer = "three";
            })
            fourButton.addEventListener('click', () => {
                    localAnswer = "four";
            })  
        }
        //Creating a function so that when the submit button is clicked, it checks if the answers match up and moves to the next question
        submitButton.addEventListener('click', () => {
              function validateAnswer() {
                  if (localAnswer === quizQuestions[i].answer) {
                      //alert("Correct!");
                      addCorrect();
                      i++
                      stopQuiz();
                  } else {
                      //alert("Incorrect!"); 
                      notCorrect();
                      i++
                      stopQuiz();
                  }
          }
        //Calling the function
        validateAnswer();
        })
             
        
        //Initializing the quiz
        startQuiz();
        