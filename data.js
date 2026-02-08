function getBlueprints() {
  return JSON.parse(localStorage.getItem("blueprints")) || [];
}

function saveBlueprints(data) {
  localStorage.setItem("blueprints", JSON.stringify(data));
}

function getContracts() {
  return JSON.parse(localStorage.getItem("contracts")) || [];
}

function saveContracts(data) {
  localStorage.setItem("contracts", JSON.stringify(data));
}
