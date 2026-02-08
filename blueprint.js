let fields = [];

function addField() {
  const type = document.getElementById("fieldType").value;
  const label = document.getElementById("fieldLabel").value;

  if (label.trim() === "") {
    alert("Field label required");
    return;
  }

  fields.push({ type, label });
  renderFields();
  document.getElementById("fieldLabel").value = "";
}

function renderFields() {
  const list = document.getElementById("fieldList");
  list.innerHTML = "";

  fields.forEach(f => {
    const li = document.createElement("li");
    li.innerText = `${f.label} (${f.type})`;
    list.appendChild(li);
  });
}

function saveBlueprint() {
  const name = document.getElementById("blueprintName").value;

  if (name.trim() === "") {
    alert("Blueprint name required");
    return;
  }

  const blueprints = getBlueprints();
  blueprints.push({
    id: Date.now(),
    name,
    fields
  });

  saveBlueprints(blueprints);

  alert("Blueprint saved");
  fields = [];
  renderFields();
  document.getElementById("blueprintName").value = "";
}
