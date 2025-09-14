
function renderStats() {
  const statsBox = document.getElementById("teamStats");
  if (!statsBox) return;
  const team = JSON.parse(localStorage.getItem("team") || "[]");
  const coins = parseInt(localStorage.getItem("coins") || "0");
  const gems = parseInt(localStorage.getItem("gems") || "0");
  const missions = JSON.parse(localStorage.getItem("missions") || "[]");
  const challengeProgress = parseInt(localStorage.getItem("challengeProgress") || "0");
  statsBox.innerHTML = `
    <p>👥 Giocatori posseduti: <strong>${team.length}</strong></p>
    <p>💰 Monete: <strong>${coins}</strong></p>
    <p>💎 Gemme: <strong>${gems}</strong></p>
    <p>📅 Missioni completate: <strong>${missions.length}</strong></p>
    <p>🏆 Sfide completate: <strong>${challengeProgress}</strong>/5</p>
  `;
}
