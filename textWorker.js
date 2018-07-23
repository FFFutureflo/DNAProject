var i = 2;

function addTextarea(htmlElement) {
  var newBreak = document.createElement("br");
  var newTextarea = document.createElement("textarea");
  newTextarea.id = "textarea" + i;
  newTextarea.className = "sequenceTextarea";
  newTextarea.placeholder = "Please enter your sequence here";
  htmlElement.appendChild(newBreak);
  htmlElement.appendChild(newTextarea);
  i++;
}

function showResult(sequences) {
  var headers = Array();
  for (var m in sequences[0]) {
    headers.push(m);
  }

  var table = document.createElement("table");
  var header = table.createTHead();
  var row = header.insertRow(0);
  for (var i = 0; i < headers.length; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = headers[i];
  }

  for (var j = 0; j < sequences.length; j++) {
    var rowData = table.insertRow(j + 1);
    var sequence = sequences[j];
    var k = 0;
    for (var m in sequence) {
      var cellData = rowData.insertCell(k);
      cellData.innerHTML = sequence[m];
      k++;
    }
  }

  document.getElementById("result").appendChild(table);
}
