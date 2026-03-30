let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let headerRow = document.createElement("tr");

let id = document.createElement("th");
id.textContent = "ID";
headerRow.appendChild(id);

let nameHeader = document.createElement("th");
nameHeader.textContent = "Name";
headerRow.appendChild(nameHeader);

thead.appendChild(headerRow);
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      return response.json();
    })
    .then(function(users) {
      for (let i = 0; i < users.length; i++) {
        let user = users[i];

        let row = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.textContent = user.id;

        let nameCell = document.createElement("td");
        nameCell.textContent = user.name;

        row.appendChild(idCell);
        row.appendChild(nameCell);

        tbody.appendChild(row);
      }
    })
    .catch(function(error) {
      console.error("Error fetching users:", error);
    });