// CLOCK WIDGET
document.getElementById("clock").innerHTML = `
  <h2 class="text-xl font-bold mb-4">Clock</h2>
  <div id="time" class="text-3xl font-mono text-center"></div>
`;

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("time").textContent = timeString;
}

updateTime(); // Call immediately
setInterval(updateTime, 1000); // Update every second
