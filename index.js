const monthName = document.getElementById("monthName");
const dayName = document.getElementById("dayName");
const dayNumber = document.getElementById("dayNumber");
const year = document.getElementById("year");

const date = new Date();

const month = date.getMonth();
monthName.innerHTML = date.toLocaleString("en", { month: "long" });
dayName.innerHTML = date.toLocaleString("en", { weekday: "long" });
dayNumber.innerHTML = date.getDay();
year.innerHTML = date.getFullYear();
