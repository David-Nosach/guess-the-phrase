// Variables

// const parent = document.getElementsByClassName('main-container');


const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

//Reset Button code
const reset = document.querySelector('#reset')
// const phraseUl = document.querySelector('#phrase ul');

// New additions
const phraseUl = document.querySelector('#phrase ul');
const uls = document.querySelector('.uls')

const heartLost = document.querySelectorAll('.tries img')[missed];
const heartLives = document.querySelectorAll('.tries img')
const imagesHearts = heartLost.childNodes;

// const li = document.querySelectorAll('li');
//Hide Start Overlay

btn__reset.addEventListener('click', function () {
    overlay.style.display = 'none';

    missed = 0; 
// Reset Phrase
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
   
    removeAllChildNodes(uls)
    let phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);

// clear keyboard    
const buttons = document.querySelectorAll("button")
buttons.forEach(butt => {
    butt.classList.remove('chosen');
    butt.disabled = false;

    heartLives.forEach(heart => {
        heart.src = 'images/liveHeart.png';
    })
    
})

});

//Phrases

let phrases = [
    'looking good honey',
    'get swoll',
    'can of whoopass',
    'hakunah my tatas',
    'you could do it'   
];

//Get Random Phrase and split it 

function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[randomNumber];
    const split = randomPhrase.split('');
    return split;
}

let phraseArray = getRandomPhraseAsArray(phrases);




//Display for character input

function addPhraseToDisplay(arr) {
    const phraseUl = document.querySelector('#phrase ul');
    for (i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        phraseUl.appendChild(li);
        if (arr[i]=== ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
};

addPhraseToDisplay(phraseArray);


//Check letter 

function checkLetter(button) {
    const li = document.querySelectorAll('li');
    let match = null;
    for (i = 0; i < li.length; i++) {
        if (button.textContent === li[i].textContent.toLowerCase()) {
           li[i].classList.add('show');
            match = button.textContent;
        }
    }

    return match;
   
};

// Keyboard Listener

qwerty.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' || e.target.clasName === 'chosen') {
        const button = e.target;
        button.classList.add('chosen');
        button.disabled = true;
        const letterFind = checkLetter(button);
    if (letterFind === null) {
            const heartLost = document.querySelectorAll('.tries img')[missed];
            heartLost.src = 'images/lostHeart.png';
            missed++;
        }
        checkWin();
    }
})

//checkWin Function

function checkWin(){
    
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    const title = document.querySelector('.title');
    if(letter.length === show.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        title.textContent = 'You did it!';
        btn__reset.textContent ="Play Again";
    } else if (missed > 4) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        title.textContent = 'You lost!';
        btn__reset.textContent ="Play Again";
        
    }

   


}

    


