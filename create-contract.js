const blueprintSelect = document.getElementById("blueprintSelect");
const form = document.getElementById("contractForm");

function loadBlueprints() {
  const blueprints = getBlueprints();
  blueprintSelect.innerHTML = "<option value=''>Select</option>";

  blueprints.forEach(bp => {
    const opt = document.createElement("option");
    opt.value = bp.name;
    opt.innerText = bp.name;
    blueprintSelect.appendChild(opt);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("contractName").value;
  const blueprint = blueprintSelect.value;

  if (!name || !blueprint) {
    alert("All fields required");
    return;
  }

  const contracts = getContracts();
  contracts.push({
    id: Date.now(),
    name,
    blueprint,
    status: "Created",
    createdDate: new Date().toLocaleDateString()
  });

  saveContracts(contracts);
  alert("Contract created");
  window.location.href = "index.html";
});

loadBlueprints();
