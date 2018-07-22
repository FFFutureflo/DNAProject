var i = 2;

function addTextarea(htmlElement) {
  var newBreak = document.createElement("br");
  var newTextarea = document.createElement("textarea");
  newTextarea.id = "textarea" + i;
  newTextarea.className = "sequenceTextarea";
  newTextarea.placeholder = "Please enter your sequence here";
  htmlElement.appendChild(newBreak);
  htmlElement.appendChild(newTextarea);
  console.log(htmlElement);
  i++;
}

function showResult(sequences, results) {
  var headers = ["Sequence", "Score"];

  var table = document.createElement("table");
  var header = table.createTHead();
  var row = header.insertRow(0);
  for (var i = 0; i < headers.length; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = headers[i];
  }

  for (var j = 0; j < sequences.length; j++) {
    var rowData = table.insertRow(j + 1);
    console.log(rowData + " Das hier ist rowData");

    console.log("J ist: " + j);
    // TODO hier müsste eigentlich j rein, aber dann wird ein Fehler geworfen:
    //Uncaught DOMException: Failed to execute 'insertCell' on 'HTMLTableRowElement':
    //The value provided (1) is outside the range [-1, 0].
    var cellData = rowData.insertCell(-1);
    cellData.innerHTML = sequences[j];
    cellData = rowData.insertCell(-1);
    cellData.innerHTML = results[j];
  }

  document.getElementById("result").appendChild(table);
}
