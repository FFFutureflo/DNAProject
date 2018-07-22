/*
var sequences = new Array();

sequences.push("CTCCATCACAC");
sequences.push("AATATCTACAT");
sequences.push("ACATTCTCCAT");
sequences.push("CCTCCCCACTC");

function getSequences() {
  for (var i = 0; i < sequences.length; i++) {
    console.log(sequences[i]);
  }
}
*/

function getScores(htmlElement) {
  var sequences = getSequencesFromElement(htmlElement);
  var results = new Array();

  for (var i = 0; i < sequences.length; i++) {
    var score = 0;
    for (var j = 0; j < sequences.length; j++) {
      if (i != j) {
        score += sequenceCompare(sequences[i], sequences[j]);
      }
    }
    score /= sequences.length - 1;
    results[i] = score;
    console.log("Das Resultat von " + sequences[i] + " ist: " + score);
    console.log("Hier funktioniert noch alles");
  }
  showResult(sequences, results);
}

function sequenceCompare(sequence1, sequence2) {
  var score = 0;
  for (
    var sequencePosition = 0;
    sequencePosition < sequence1.length;
    sequencePosition++
  ) {
    if (
      sequence1.charAt(sequencePosition) == sequence2.charAt(sequencePosition)
    ) {
      score++;
    }
  }
  return score;
}

function getSequencesFromElement(htmlElement) {
  var sequences = new Array();
  var childs = htmlElement.childNodes;
  for (var i = 0; i < childs.length; i++) {
    if (childs[i].className == "sequenceTextarea") {
      sequences.push(childs[i].value);
    }
  }
  return sequences;
}
