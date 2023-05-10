(function () {
  console.log("Hello World");
  let startbtn = document.querySelector(".start");
  let pausebtn = document.querySelector(".pause");
  let resetbtn = document.querySelector(".reset");

  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let second = document.querySelector(".second");
  let timerid;
  startbtn.addEventListener("click", () => {
    if (
      parseInt(hour.value, 10) === 0 &&
      parseInt(minute.value, 10) === 0 &&
      parseInt(second.value, 10) === 0
    )
      return;
    function starttimer() {
      startbtn.style.display = "none";
      pausebtn.style.display = "initial";
      timerid = setInterval(() => {
        timer();
      }, 1000);
    }
    starttimer();
  });
  function timer() {
    if (second.value > 60) {
      minute.value += 1;
      second.value = parseInt(second.value) - 59;
    }
    if (minute.value > 60) {
      hour.value += 1;
      minute.value = parseInt(minute.value) - 60;
    }
    minute.value = minute.value > 60 ? 60 : minute.value;
    if (
      parseInt(hour.value, 10) === 0 &&
      parseInt(minute.value, 10) === 0 &&
      parseInt(second.value, 10) === 0
    ) {
      hour.value = "";
      minute.value = "";
      second.value = "";
      stopinterval("pause");
    } else if (second.value != 0) {
      second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
    } else if (minute.value != 0 && second.value == 0) {
      second.value = 59;
      minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
    } else if (hour.value != 0 && minute.value == 0) {
      minute.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
    return;
  }
  function stopinterval(state) {
    startbtn.innerHTML = state === "pause" ? "continue" : "start";
    pausebtn.style.display = "none";
    startbtn.style.display = "initial";
    clearInterval(timerid);
  }
  pausebtn.addEventListener("click", () => {
    stopinterval("pause");
  });
  resetbtn.addEventListener("click", () => {
    hour.value = "";
    minute.value = "";
    second.value = "";
    stopinterval();
  });
})();
