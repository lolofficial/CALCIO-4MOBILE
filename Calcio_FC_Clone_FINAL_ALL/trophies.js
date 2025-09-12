
function renderTrophies() {
  const div = document.getElementById("trophyBox");
  if (!div) return;
  const trophy = localStorage.getItem("tournamentTrophy");
  div.innerHTML = "<h3>Trofei sbloccati:</h3>";
  if (trophy) div.innerHTML += "<p>" + trophy + "</p>";
  else div.innerHTML += "<p>Nessun trofeo sbloccato.</p>";
}
