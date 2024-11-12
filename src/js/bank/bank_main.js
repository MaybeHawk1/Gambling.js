import { gamesPlayed } from "../games/diceRoll.js";

document.cookie = `Games Played=${gamesPlayed}`;

// Hooks
const req = document.getElementById("req");
const gamesPlayedH3 = document.getElementById("gamesPlayed");
const currentMoneyH3 = document.getElementById("currentMoney");
// End of hooks
let gamesPlayed = document.cookie;

req.addEventListener("click", () => {
  setInterval(() => {
    gamesPlayed.innerHTML = `${gamesPlayed}`
    currentMoney = 0;
  } 3000);
});
