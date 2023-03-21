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

//New Code


function remover(){
  
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
    // heartLost.src = 'images/liveHeart.png';
})

// buttons.classList.remove('chosen');
        // buttons.disabled = false;





    // addPhraseToDisplay(phraseArray);
    // getRandomPhraseAsArray(phrases);
    // console.log(phraseUL);
    // kids.forEach(kid => {
    //     kid.remove()
    // })

        // const kids = uls.childNodes
    // console.log(kids);
    // for (i = 0; i < kids.length; i++) {
    //     kids[i].remove()
    // }

    // CHeck this out TOMORROW ---------------------------------
// while (uls.firstChild) {
//     uls.removeChild(uls.firstChild)
// }

}

function resetClicker(){

   
// console.log(getRandomPhraseAsArray(phrases));
// let phraseArray = getRandomPhraseAsArray(phrases);
    

    addPhraseToDisplay(phraseArray);
}

reset.addEventListener('click', remover)
    // console.log(uls.children)

// New Code
// New Code

// startGame.addEventListener('click', () => {

// if (overlay.className.contains('lose') || overlay.className.contains('win') ) {
//     //overlay
//     overlay.style.display = 'none';
//     //keyboard
//     for (let i = 0 ; i < arrayButtons.length; i++) {
//         arrayButtons[i].disabled = false;
//         allButtons[i].removeAttribute('class');
//     }
//     //displayed phrase
//     while(charactersLI.firstChild) {
//         charactersLI.removeChild(charactersLI.firstChild);
//     }
//     phraseArray = getRandomPhraseAsArray(phrases)
//     addPhraseToDisplay(phraseArray);
//     //heart
//     for ( i = 0; i < heartQuerAll.length; i++ ) {
//         const heartAll = heartQuerAll[i];
//         heartAll.setAttribute('src','images/liveHeart.png');
//     }
//     missed = 0;
// } else {
//     overlay.style.display = 'none';
// }
// });







// function missy() {
//     missed;
// };

// NEw CODE YO

// let btn = document.createElement("button");
// btn.innerHTML = "Subscribe";
// document.body.appendChild(btn);






// btn.addEventListener('click', function onClick (e) {
//   document.body.style.backgroundColor = 'red';
//   document.body.style.backgroundColor = 'black';
    
//   for ( i = 0; i < heartLost.length; i++ ) {
//     const heartAll = heartLost[i];
//     heartAll.setAttribute('src','images/liveHeart.png');
// }
//   missed = 0; 
    
// });



// const keys = document.getElementById('qwerty');
//     const allButtons = qwerty.querySelectorAll('.keyrow > button');
//     const arrayButtons = Array.from(allButtons);
        

// btnn.addEventListener('click', () => {
//     for (let i = 0 ; i < arrayButtons.length; i++) {
//         arrayButtons[i].disabled = false;
//         allButtons[i].removeAttribute('class');
//     }
// }

//     if (overlay.className.contains('lose') || overlay.className.contains('win') ) {
        //overlay
        // overlay.style.display = 'none';
        //keyboard
        // for (let i = 0 ; i < arrayButtons.length; i++) {
        //     arrayButtons[i].disabled = false;
        //     allButtons[i].removeAttribute('class');
        // }
        //displayed phrase
        // while(charactersLI.firstChild) {
        //     charactersLI.removeChild(charactersLI.firstChild);
        // }
        // phraseArray = getRandomPhraseAsArray(phrases)
        // addPhraseToDisplay(phraseArray);
        //heart
//         for ( i = 0; i < heartQuerAll.length; i++ ) {
//             const heartAll = heartQuerAll[i];
//             heartAll.setAttribute('src','images/liveHeart.png');
//         }
//         missed = 0;
//     } else {
//         overlay.style.display = 'none';
//     }
//     });


// document.body.appendChild(btnn);



// function clearBoard() {


// }

// getRandomPhraseAsArray(phrases);
//     addPhraseToDisplay(phraseArray);
//     checkLetter(button);
//     checkWin();



// alert("Button is clicked");
// const allButtons = keys.querySelectorAll('.keyrow > button');
//     const arrayButtons = Array.from(allButtons);


// Start and Reset button

// startGame.style.cursor = 'pointer';

// startGame.addEventListener('click', () => {

//     if (overlay.classList.contains('lose') || overlay.classList.contains('win') ) {
//         //overlay
//         overlay.style.display = 'none';
//         //keyboard
//         for (let i = 0 ; i < arrayButtons.length; i++) {
//             arrayButtons[i].disabled = false;
//             allButtons[i].removeAttribute('class');
//         }
//         //displayed phrase
//         while(charactersLI.firstChild) {
//             charactersLI.removeChild(charactersLI.firstChild);
//         }
//         phraseArray = getRandomPhraseAsArray(phrases)
//         addPhraseToDisplay(phraseArray);
//         //heart
//         for ( i = 0; i < heartQuerAll.length; i++ ) {
//             const heartAll = heartQuerAll[i];
//             heartAll.setAttribute('src','images/liveHeart.png');
//         }
//         missed = 0;
//     } else {
//         overlay.style.display = 'none';
//     }
// });

// function buttonName() {
//     if ( checkWin() === 'You lost!' ) {
//         startGame.innerHTML = 'Try Again!';
//     } else if ( checkWin() === 'WIN' ) {
//         startGame.innerHTML = 'Could you guess another time?';
//     }
// }


// let btn = document.createElement("button");
        
// btn.innerHTML = "Subscribe";
// btn.onclick = function () {
   
// phrase.removeChild(' ');
   
//     };


// document.body.appendChild(btn);