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

// Getting correct day, date, and time
const currentDate = new Date();
const day = currentDate.getDay();
const month = currentDate.getMonth();
const date = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

dayEl.innerText = weekdays[day - 1];
monthEl.innerText = `${months[month]} ${date}`;

hoursEl.innerText = hours > 12 ? hours - 12 : hours;
pmAm.innerText = hours > 12 ? "PM" : "AM";

minutesEl.innerText = minutes;
secondsEl.innerText = seconds;

// Change Light or Dark Mode
themeBtn.addEventListener("click", () => {
  bodyEl.classList.toggle("dark");
  lightThemeIcon.classList.toggle("hidden");
  darkThemeIcon.classList.toggle("hidden");
});
