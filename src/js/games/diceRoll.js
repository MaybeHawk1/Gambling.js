import { Rng } from "../rng.js";
// Hooks
const numberShower = document.getElementById("dice-placeholder");
const submitBtn = document.getElementById("submit");
const userNumber = document.getElementById("userNumber");
const betAmount = document.getElementById("betAmount");
const didWin = document.getElementById("didWin")
// End of hooks
export let gamesPlayed = 0;


document.addEventListener("DOMContentLoaded", () => {
  submitBtn.addEventListener("click", () => {
    const rng = new Rng(1, 6);
    let randomNum = rng.generate_random_num_dice();

    if (userNumber.value == randomNum) {
      didWin.innerHTML = "YOU HAVE WON";
    } else {
      didWin.innerHTML = "You lost!";
    }

    numberShower.innerHTML = `${randomNum}`;
    gamesPlayed++;
    console.log(`Number: \t ${randomNum}\nIs Zero?: \t ${(randomNum == 0) ? "true" : "false"}\nGames Played: \t${gamesPlayed}`)
  });
});

