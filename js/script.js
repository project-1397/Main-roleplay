// ================= MOBILE MENU =================
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


// ================= LIVE CLOCK =================
function updateClock() {
  const now = new Date();

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const timeString = now.toLocaleTimeString([], options);

  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();