const span = document.getElementById("Number");
const advice = document.getElementById("Advice");
const btn = document.getElementsByTagName("button")[0];

function getData() {
  window.addEventListener("DOMContentLoaded", (event) => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        span.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
      })
  });
  btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        span.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
      })
  });
}

getData();
