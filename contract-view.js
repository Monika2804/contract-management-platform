const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const contracts = getContracts();
const contract = contracts.find(c => c.id === id);

document.getElementById("contractName").innerText = contract.name;
document.getElementById("contractStatus").innerText = contract.status;

function changeStatus(status) {
  if (contract.status === "Revoked") {
    alert("Cannot update");
    return;
  }

  contract.status = status;
  saveContracts(contracts);
  location.reload();
}
