const questionsDisplay = document.querySelector('#questions')
const answersDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: 'What are you and your Boo wearing tonight?',
        answers: [
            {
               text:'A. Our birthday suits.',
               image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        },

            {
               text:'B. Trying out a new outfit.',
               image: 'https://images.unsplash.com/photo-1603252109360-909baaf261c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ldyUyMG91dGZpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
            {
                text:'C. Dressed to the nines.',
                image: 'https://images.unsplash.com/photo-1515736076039-a3ca66043b27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG5pY2UlMjBzdWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
            {
                text:'D. Pajamas, duh.',
                image:'https://plus.unsplash.com/premium_photo-1661292128228-bf469f44812e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhamFtYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
        ],
    },
    {
        id: 1,
        text: 'What is your go to song while in the kitchen?', 
        answers: [
            {
                text:'A. "Lollipop" by Lil Wayne.',
                image:'https://i.ytimg.com/vi/mXT22skyvZ8/maxresdefault.jpg'
        },
            
            {
                text:'B. "Chicken Teriyaki" by ROSALÍA.',
                image:'https://i.ytimg.com/vi/OuE4K8pA7Es/maxresdefault.jpg'
        },  
            {
                text:'C. "Beautiful Dreamer" by Bing Crosby.',
                image:'https://i.ytimg.com/vi/wtgklHQ52WE/hqdefault.jpg'
        },
            {
                text:'D. "Banana Pancakes" by Jack Johnson.',
                image:'https://i.ytimg.com/vi/OkyrIRyrRdY/hqdefault.jpg'
            }
        ],
    },
    {
        id: 2,
        text: 'What movie are you throwing on?',
        answers: [
            {
                text:'A. Bodyheat.',
                image:'https://sun9-77.userapi.com/impg/ku8evbMj_5rtXPiWBQkPBVohLOtEM5Gk5RhD4A/vFor1sG56M4.jpg?size=807x393&quality=95&sign=124fb3b16968c3f996f70fbdff956112&type=album'
         },
            {
                text:'B. Your Name.',
                image:'https://9to5toys.com/wp-content/uploads/sites/5/2019/02/yournameanime.jpg'
         },
            {
                text:'C. The Photograph.',
                image: 'https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/03/21161515/The-Photograph-featured.jpg'
         },
            {
                text:'D. How to Lose a Guy in 10 Days.',
                image: 'https://ic.c4assets.com/brands/how-to-lose-a-guy-in-10-days/b805ad15-0273-43de-83aa-653fa2fd33cc.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90{&resize}'
         },
        ],
    },
    {
        id: 3,
        text: 'What is your favorite condiment?',
        answers: [
            {
                text:'A. Whipped Cream.',
                image:'https://images.unsplash.com/photo-1583130879758-db8ac95a9b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hpcHBlZCUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'B. Sofrito.',
                image:'https://images.unsplash.com/photo-1665581455062-2b08062768b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mcml0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'C. Gold Leaf',
                image:'https://m.media-amazon.com/images/I/41FRqQSLLIL._AC_SY350_.jpg'
         },
            {
                text:'D. Whatever I have in my fridge.',
                image:'https://onsitego.com/blog/wp-content/uploads/2021/04/Refrigerator-Door-Gasket.jpeg'
         }
        ],
    },
    {
        id: 4,
        text: 'How did you and your Honey meet?',
        answers: [
            {
                text:'A. A Tinder hookup.',
                image:'https://images.unsplash.com/photo-1644445809941-aed4b1a851f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
         },
            {
                text:'B. On vacation.',
                image:'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'C. At an event.',
                image:'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'D. We were friends first.',
                image:'https://plus.unsplash.com/premium_photo-1661558897241-16b33a0418c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZW5kc2hpcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
         },
        ],
    },
    {
        id: 5,
        text: 'What are you and your Lover having for breakfast in the morning?', 
        answers: [
            {
                text:'A. Sausage.',
                image:'https://images.unsplash.com/photo-1552913903-2cffa1962dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2F1c2FnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'B. A Fry Up.',
                image:'https://images.unsplash.com/photo-1655979283362-535e6a167a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ5JTIwdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'C. Quiche Lorraine.',
                image:'https://images.unsplash.com/photo-1647275556041-ab0395841a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVpY2hlJTIwbG9ycmFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'D. Hotcakes',
                image:'https://images.unsplash.com/flagged/photo-1557609786-fd36193db6e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90Y2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         },
        ],
    },
    {   
        id: 6,
        text: 'What do you love the most about your Sweetheart?',
        answers: [
            {
                text:"A. Their big ol' butt.",
                image:'https://images.unsplash.com/photo-1604281018033-4d7d7d74021a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1dHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'B. Their love for adventure.',
                image:'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'C. They hold their head high.',
                image:'https://images.unsplash.com/photo-1528656707959-c9dc050e4841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
         },
            {
                text:'D. Their ability to laugh about themselves.',
                image:'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGF1Z2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         },
        ],
    },
    {
        id: 7,
        text: 'What do you never leave the house without?',
        answers: [
            {
                text:'A. My ride or die lipstick.',
                image:'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         }, 
            {
                text:'B. My passport.',
                image:'https://images.unsplash.com/photo-1487637419635-a2a471ff5c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzc3BvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         },     
            {
                text:'C. My designer bag.',
                image:'https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduZXIlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         }, 
            {
                text:'D. My favorite sweatshirt.',
                image:'https://plus.unsplash.com/premium_photo-1673502751757-cfdc48a4904d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dlYXRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            },
        ],
    }, 
]

const unansweredQuestions = []
const selectedAnswers = []

const answers = [
    {
        combination: ['A. Our birthday suits.','D. "Banana Pancakes" by Jack Johnson.','B. Your Name.','A. Whipped Cream.','B. On vacation.','D. Hotcakes','B. Their love for adventure.','D. My favorite sweatshirt.' ],
        text:"Banana Pancakes",
        image:"https://divascancook.com/wp-content/uploads/2022/01/banana-pancakes-8.jpg",
        alt: "banana pancakes",
        text: "Who doesn't love a little breakfast for dinner? Keep your date night nice and cozy with this easy peasy Banana Pancakes recipe. Sip on an espresso martini while you're eating to keep the romance going all night long."
    },
    {
        combination: ['C. Dressed to the nines.','C. "Beautiful Dreamer" by Bing Crosby.','C. The Photograph.','C. Gold Leaf','D. We were friends first.','C. Quiche Lorraine.',"A. Their big ol' butt.",'C. My designer bag.'],
        text:"Venetian Duck Ragu",
        image:"https://cdn.shopify.com/s/files/1/1725/5449/articles/Duck_ragu_1200x1200.jpg?v=1590766287",
        alt: "Venetian Duck Ragu",
        text: "There's no shortage of luxury here with this Venetian Duck Ragu. Slap on your flashiest digs, dim the lights <em>real</em> low and enjoy this gorgeous pasta with your favorite glass of Chianti."
    },
    {
        combination: ['D. Pajamas, duh.','B. "Chicken Teriyaki" by ROSALÍA.','A. Bodyheat.','A. Whipped Cream.','A. A Tinder hookup.','A. Sausage.','C. They hold their head high.','A. My ride or die lipstick.'],
        text:"Massaman Beef Curry",
        image:"https://www.kitchensanctuary.com/wp-content/uploads/2019/10/Beef-Massaman-square-1200-1459.jpg",
        alt: "Massaman Beef Curry",
        text: "No vanilla date night for you two. This Massaman Beef Curry is a match made in heaven for you thrill seakers! Cut down on the spice with a delicous Mango Lassi."
    },
    {
        combination: ['B. Trying out a new outfit.','A. "Lollipop" by Lil Wayne.','C. The Photograph.','D. Whatever I have in my fridge.','B. On vacation.','B. A Fry Up.','D. Their ability to laugh about themselves.','B. My passport.'],
        text:"Honey Teriyaki Salmon",
        image:"https://spicysouthernkitchen.com/wp-content/uploads/2022/01/Teriyaki-Salmon-4.jpg",
        alt:"Honey Teriyaki Salmon",
        text:"You're feeling frisky, huh? With aphrodisiacs such as salmon and honey, this dish is packed with all the good stuff to <em>really</em> set the mood. Pair this with a Honey Bee and you two will be having dinner in bed."
    }
]
    



const populateQuestions = () => {
    questions.forEach(question => {
       const titleBlock = document.createElement('div')
       titleBlock.id = question.id
       titleBlock.classList.add('title-block')
       const titleHeading = document.createElement('h2')
       titleHeading.textContent = question.text
       titleBlock.append(titleHeading)
       questionsDisplay.append(titleBlock)

       const answersBlock = document.createElement('div')
       answersBlock.id = question.id + "-questions"
       answersBlock.classList.add('answer-options')

       unansweredQuestions.push(question.id)

       question.answers.forEach(answer => {
        const answerBlock = document.createElement('div')
        answerBlock.classList.add('answer-block')
        answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
        const answerImage = document.createElement('img')
        answerImage.setAttribute('src', answer.image)
        answerImage.setAttribute('alt', answer.alt)

        const answerTitle = document.createElement('h3')
        answerTitle.textContent = answer.text

        const answerInfo = document.createElement('p')
        const imageLink= document.createElement('a')
        imageLink.setAttribute('href', answer.credit)
       
        


        // answerInfo answerImage
        answerBlock.append(answerImage, answerTitle, answerInfo)

        answersBlock.append(answerBlock)
       })
       questionsDisplay.append(answersBlock)
    })
}

populateQuestions()

const handleClick = (questionId, selectedAnswer) => {
    if (unansweredQuestions.includes(questionId))
    selectedAnswers.push(selectedAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(selectedAnswers)
    console.log(unansweredQuestions)

    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        showAnswer()
    }
}

const showAnswer = () => {

    let result 
    answers.forEach(answer => {
        if (selectedAnswers.includes(answer.combination[0]) +
            selectedAnswers.includes(answer.combination[1]) +
            selectedAnswers.includes(answer.combination[2]) +
            selectedAnswers.includes(answer.combination[3])

        ) {
            result = answer
            return
        } else if (!result) {
             result=answers[0]
        }
    })

    console.log(result)

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answersDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))





}



