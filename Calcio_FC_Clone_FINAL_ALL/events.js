
const today = new Date().toISOString().split("T")[0];
const event = {
  date: today,
  name: "Calcio Festival",
  reward: "1000 Coins",
  code: "FEST1000"
};
function renderEvent() {
  const div = document.getElementById("eventBox");
  if (!div) return;
  div.innerHTML = `<h3>${event.name} (${event.date})</h3><p>Premio: ${event.reward}</p><p>Codice evento: <b>${event.code}</b></p>`;
}
