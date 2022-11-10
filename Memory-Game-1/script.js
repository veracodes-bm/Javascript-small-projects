const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

let cardChosen = []
let cardsChosenIds= []
let cardsWon = []


function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard )
      
      grid.appendChild(card)
    }
  

}

createBoard()

function checkMatch() {

    const cards = document.querySelectorAll('.grid img')
    const optionOnId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if(optionOnId == optionTwoId) {
        alert('you clicked the same card')
        cards[optionOnId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    
    else if(cardChosen[0]== cardChosen[1]) {

        alert('you found a match!!')
        cards[optionOnId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOnId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }

    else {
        cards[optionOnId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
    cardChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    
}

function flipCard() {

    const cardId = this.getAttribute('data-id')
    
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    
    this.setAttribute('src', cardArray[cardId].img)
    
    if(cardChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
    
}

