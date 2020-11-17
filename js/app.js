const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
let missed = 0;
const phrases = [
  "Ghost of Tsushima",
  "Cold War",
  "Pacific Ocean",
  "Madagascar",
  "Ireland",
];

const overlay = document.querySelector("#overlay");
const startButton = document.querySelector(".btn__reset");
startButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

const dieRoll = Math.floor(Math.random() * 5); // Random number between 0-5

function getRandomPhraseAsArray(arr) {
  let randomPhrase = arr[dieRoll];
  for (let i = 0; i < randomPhrase.length; i++) {
    console.log(randomPhrase.charAt(i));
  }
  console.log(arr[dieRoll]);
  return randomPhrase;
}

getRandomPhraseAsArray(phrases);
