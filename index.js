const clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = `<p>${date.toLocaleTimeString()}</p>`;
}, 1000);
