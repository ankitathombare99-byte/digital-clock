function updateClock() {
  let now = new Date();

  // Time
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;

  // Date
  let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").innerText = now.toLocaleDateString("en-US", options);
}

// Update every second
setInterval(updateClock, 1000);
updateClock();

// Dark Mode Toggle
document.getElementById("toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
