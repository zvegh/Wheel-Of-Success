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
    console.log(randomPhrase.charAt(i));
    let li = document.createElement("li");
    li.textContent = arr[dieRoll].value;
    phrase.appendChild(li);
    if (arr[i] !== " ") {
      li.className = "letter";
    } else {
      li.className = "";
    }
  }
  return phrases[dieRoll];
};

getRandomPhraseAsArray(phrases);

const checkLetter = (button) => {};
