const home = document.getElementById("home")

export function changeH1(h1) {
  setInterval(() => {
    h1.innerHTML = "Home";
  }, 10000);
}
