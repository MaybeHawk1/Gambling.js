const home = document.getElementById("home");

export function changeH1(h1) {
  setInterval(() => {
    console.log(`Changed ${h1.innerHTML} To Home`);
    h1.innerHTML = "Home";
  }, 10000);
}
