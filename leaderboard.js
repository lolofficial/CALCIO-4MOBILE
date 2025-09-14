
let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
function submitScore(nickname, points) {
  leaderboard.push({ name: nickname, score: points });
  leaderboard.sort((a, b) => b.score - a.score);
  if (leaderboard.length > 10) leaderboard = leaderboard.slice(0, 10);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  renderLeaderboard();
}
function renderLeaderboard() {
  const board = document.getElementById("leaderboardBox");
  if (!board) return;
  board.innerHTML = "<h3>🏆 Classifica Locale</h3><ol>" +
    leaderboard.map(p => `<li>${p.name} - ${p.score} punti</li>`).join("") +
    "</ol>";
}
function clearLeaderboard() {
  if (confirm("Vuoi davvero cancellare la classifica?")) {
    leaderboard = [];
    localStorage.setItem("leaderboard", "[]");
    renderLeaderboard();
  }
}
