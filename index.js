function loadContracts() {
  const contracts = getContracts();
  const table = document.getElementById("contractTable");
  table.innerHTML = "";

  contracts.forEach(c => {
    const row = `
      <tr>
        <td>${c.name}</td>
        <td>${c.blueprint}</td>
        <td>${c.status}</td>
        <td>${c.createdDate}</td>
        <td>
          <a href="contract-view.html?id=${c.id}">View</a>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

loadContracts();
