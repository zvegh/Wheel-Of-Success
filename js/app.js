const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
let missed = 0;
const phrases = [
  "Ghost of Tsushima",
  "I am learning javascript",
  "Pacific Ocean",
  "Madagascar",
  "My next destination is Ireland",
];
let hearts = document.querySelectorAll('img');

const overlay = document.querySelector("#overlay");
const startButton = document.querySelector(".btn__reset");
startButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

const dieRoll = Math.floor(Math.random() * 5); // Random number between 0-5
// return a random phrase from the array
const getRandomPhraseAsArray = (arr) => {
  let randomPhrase = arr[dieRoll];
  for (let i = 0; i < randomPhrase.length; i++) {
    console.log(randomPhrase.charAt(i)); // can comment out later
  }
  return phrases[dieRoll];
};

getRandomPhraseAsArray(phrases);
const randomPhrase = phrases[dieRoll];

const addPhraseToDisplay = (arr) => {
  // arr is declared but never used :(
  for (let i = 0; i < randomPhrase.length; i++) {
    let li = document.createElement("li");
    li.textContent = randomPhrase.charAt(i);
    // console.log(li); // just for testing
    phrase.appendChild(li);
    if (li.textContent !== " ") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
  }
};

addPhraseToDisplay(phrases);

const checkLetter = (button) => {
  const checkLetter = document.getElementsByClassName("letter");
  let match = null;
  for (let i = 0; i < checkLetter.length; i++) {
    if (checkLetter[i].textContent.toLowerCase() === button.textContent) {
      checkLetter[i].className = "show";
      match += checkLetter[i].textContent;
      button.disabled = 'true';
    }
  }
  return match;
};

qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.className = "chosen";
  }
  if (e.target.className === "chosen") {
    e.target.disabled = "true";
  }
  let letter = checkLetter(e.target);
  if (letter === null) {
    missed += 1;
    hearts[missed - 1].src = 'images/lostHeart.png';
  }
});

const checkWin = () => {
  const letters = document.getElementsByClassName('letter');
  const show = document.getElementsByClassName('show');
  if (letters.length === show.length) {
    overlay.className = 'win';
    overlay.childNodes[0].textContent = 'You won!';
    overlay.style.display = 'flex';
  }
  if (missed > 4) {
    overlay.className = 'lose';
    overlay.childNodes[0].textContent = 'You lost!';
    overlay.style.display = 'flex';
  }
}