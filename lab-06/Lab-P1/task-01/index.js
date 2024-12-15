document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addRow();
});

document.querySelector("#count").addEventListener("click", countRows);

function addRow() {
  var textInput = document.querySelector("input");
  var tableBody = document.querySelector("#results");

  if (!textInput.value) {
    alert("Please enter a news headline.");
    textInput.focus();
    return;
  }

  var createdRow = createRow(textInput.value);
  tableBody.appendChild(createdRow);
  textInput.value = "";
  document.getElementById("rows").textContent = "";
}

var counter = 1;
function createRow(cellTwoValue) {
  var row = document.createElement("tr");
  var numberCell = document.createElement("td");
  var newsCell = document.createElement("td");
  numberCell.textContent = counter;
  newsCell.textContent = cellTwoValue;
  row.appendChild(numberCell);
  row.appendChild(newsCell);
  counter++;
  return row;
}

function countRows() {
  var tableBody = document.querySelector("#results");
  var rowCount = tableBody.getElementsByTagName("tr").length;
  document.getElementById("rows").textContent = "Rows Count: " + rowCount;
}
