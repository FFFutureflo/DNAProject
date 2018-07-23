function DNASequence(seq, score) {
  this.sequence = seq;
  this.score = score;
  //this.origin = "origin";
}

function getScores(htmlElement) {
  var sequences = getSequencesFromElement(htmlElement);

  for (var i = 0; i < sequences.length; i++) {
    var score = 0;
    for (var j = 0; j < sequences.length; j++) {
      if (i != j) {
        score += sequenceCompare(sequences[i], sequences[j]);
        console.log("Der Score ist: " + score);
      }
    }
    score /= sequences.length - 1;
    sequences[i].score = score;
    console.log(
      "Das Resultat von " +
        sequences[i].sequence +
        " ist: " +
        sequences[i].score
    );
    console.log("Hier funktioniert noch alles");
  }
  showResult(sequences);
}

function sequenceCompare(seq1, seq2) {
  sequence1 = seq1.sequence;
  sequence2 = seq2.sequence;
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

// Returns array of DNASequence Objects
function getSequencesFromElement(htmlElement) {
  var sequences = new Array();
  var childs = htmlElement.childNodes;
  for (var i = 0; i < childs.length; i++) {
    if (childs[i].className == "sequenceTextarea") {
      var sequence = new DNASequence(childs[i].value, 0);
      sequences.push(sequence);
    }
  }
  return sequences;
}
