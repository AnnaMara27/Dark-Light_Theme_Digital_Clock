const bodyEl = document.querySelector("body");
const lightThemeIcon = document.querySelector(".fa-sun");
const darkThemeIcon = document.querySelector(".fa-moon");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const pmAm = document.getElementById("pm-am");
const themeBtn = document.querySelector(".theme-icons");

// Change Light or Dark Mode
themeBtn.addEventListener("click", () => {
  bodyEl.classList.toggle("dark");
  lightThemeIcon.classList.toggle("hidden");
  darkThemeIcon.classList.toggle("hidden");
});

function updateClock() {
  // Getting correct day, date, and time
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const date = now.getDate();
  const hoursExact = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Setting the day and the date
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  dayEl.innerText = weekdays[day];
  monthEl.innerText = `${months[month]} ${date}`;

  // Displaying the time
  const hours = hoursExact < 12 ? hoursExact : hoursExact - 12;
  pmAm.innerText = hoursExact > 12 ? "PM" : "AM";
  hoursEl.innerText = hours >= 10 ? hours : `0${hours}`;

  minutesEl.innerText = minutes >= 10 ? minutes : `0${minutes}`;
  secondsEl.innerText = seconds >= 10 ? seconds : `0${seconds}`;
  console.log(seconds);
}

setInterval(updateClock, 1000);

updateClock();
