
const missions = [
  { id: 1, desc: "Accedi oggi", reward: "500 Coins" },
  { id: 2, desc: "Compra 1 giocatore", reward: "1 Gold Pack" }
];
let missionState = JSON.parse(localStorage.getItem("missions") || "[]");
function renderMissions() {
  const div = document.getElementById("missionList");
  if (!div) return;
  div.innerHTML = "";
  missions.forEach((m, i) => {
    const done = missionState.includes(m.id);
    const btn = done ? "✔️ Completata" : `<button onclick="completeMission(${m.id})">Riscatta</button>`;
    div.innerHTML += `<div><strong>${m.desc}</strong> - Premio: ${m.reward} ${btn}</div>`;
  });
}
function completeMission(id) {
  if (!missionState.includes(id)) {
    missionState.push(id);
    localStorage.setItem("missions", JSON.stringify(missionState));
    alert("Missione completata! Premio riscattato.");
    renderMissions();
  }
}
