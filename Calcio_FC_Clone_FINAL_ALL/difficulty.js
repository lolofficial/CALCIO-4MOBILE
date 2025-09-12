
let difficulty = localStorage.getItem("difficulty") || "medio";
function setDifficulty(level) {
  difficulty = level;
  localStorage.setItem("difficulty", level);
  renderDifficulty();
}
function renderDifficulty() {
  const div = document.getElementById("difficultyBox");
  if (!div) return;
  div.innerHTML = "<p>Difficoltà attuale: <strong>" + difficulty + "</strong></p>" +
    "<button onclick=\"setDifficulty('facile')\">Facile</button> " +
    "<button onclick=\"setDifficulty('medio')\">Medio</button> " +
    "<button onclick=\"setDifficulty('difficile')\">Difficile</button>";
}
