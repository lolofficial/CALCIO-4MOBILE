
let tournamentStage = parseInt(localStorage.getItem("tournamentStage") || "0");
let tournamentTrophy = localStorage.getItem("tournamentTrophy") || "";
function renderTournament() {
  const div = document.getElementById("tournamentBox");
  if (!div) return;
  if (tournamentTrophy) {
    div.innerHTML = "<h3>🏆 Hai già vinto il torneo!</h3>";
    return;
  }
  div.innerHTML = "<h3>Stadio " + (tournamentStage + 1) + "/3</h3><button onclick='winMatch()'>Vinci Partita</button>";
}
function winMatch() {
  tournamentStage++;
  if (tournamentStage >= 3) {
    localStorage.setItem("tournamentTrophy", "🏆 Campione");
    alert("Hai vinto il torneo!");
  }
  localStorage.setItem("tournamentStage", tournamentStage);
  renderTournament();
}
