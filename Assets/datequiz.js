var apiKey = "9973533";
https://www.themealdb.com/api/json/v2/9973533/latest.php

www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

let friskyResult;
let adventerousResult;
let fancyResult;
let chillResult;
let currentQuestionIndex = 0;

const questions = [
    {
        'text': 'What are you and your Boo wearing tonight?',
        'options': [
            'A. Our birthday suits.',
            'B. Trying out a new outfit.',
            'C. Dressed to the nines.',
            'D. Pajamas, duh.'
        ],
    },
    {
        'text': 'What is your go to song while in the kitchen?', 
        'options': [
            'A. "Lollipop" by Lil Wayne.',
            'B. "Chicken Teriyaki" by ROSALÍA.',
            'C. "Beautiful Dreamer" by Bing Crosby.',
            'D. "Banana Pancakes" by Jack Johnson.',
        ],
    },
    {
        'text': 'What movie are you throwing on?',
        'options': [
            'A. Bodyheat.',
            'B. Your Name.',
            'C. The Photograph.',
            'D. How to Lose a Guy in 10 Days.'
        ],
    },
    {
        'text': 'What is your favorite condiment?',
        'options': [
            'A. Whipped Cream.',
            'B. Sofrito.',
            'C. Gold Leaf',
            'D. Whatever I have in my fridge.',
        ],
    },
    {
        'text': 'How did you and your Honey meet?',
        'options': [
            'A. A Tinder hookup.',
            'B. On vacation.',
            'C. At an event.',
            'D. We were friends first.'
        ],
    },
    {
        'text': 'What are you and your Lover having for breakfast in the morning?', 
        'options': [
            'A. Sausage.',
            'B. A Fry Up.',
            'C. Quiche Lorraine.',
            'D. Hotcakes',
        ],
    },
    {   
        'text': 'What do you love the most about your Sweetheart?',
        'options': [
            "A. Their big ol' butt.",
            'B. Their love for adventure.',
            'C. They hold their head high.',
            'D. Their ability to laugh about themselves.',
        ],
    },
    {
        'text': 'What do you never leave the house without?',
        'options': [
            'A. My ride or die lipstick.',
            'B. My passport.',
            'C. My designer bag.',
            'D. My favorite sweatshirt.'
        ],
    }, 
    {
        'text': 'You and your Darling just won an all expense paid vacation! Where are you going?',
        'options': [
            'A. Turks and Caicos.',
            'B. Wherever the winds take us.',
            'C. The Scottish Highlands.', 
            'D. Roadtrip!'
        ],
    }
];

function updateQuestionDisplay(){
    const currentQuestion = questions[currentQuestionIndex];
    $('#question') = questions[currentQuestionIndex];
    $('questionButton-1').text(currentQuestion.options[0])
    $('questionButton-2').text(currentQuestion.options[1])
    $('questionButton-3').text(currentQuestion.options[2])
    $('questionButton-4').text(currentQuestion.options[3])
};

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        updateQuestionDisplay()
    } else {
        //display results
    }
};

function addPoints(choice) {
    
    if(choice == 0){
        friskyResult++
    } else if (choice == 1) {
        adventerousResult++
    } else if (choice == 2) {
        fancyResult ++ 
    } else if (choice == 3) {
        chillResult++
    }
};

