function calculateLengthOfWords(text) {
  var words = text.match(/\w+[_\+\=\-\,\.\!]?\w+/g).map(w => w.length);
  var sum = words.reduce((total, value) => total + value, 0);
  var result = [];
  var count = result.push(words.length, Math.max(...words), Math.min(...words), Math.round(sum / words.length));
  return result;
}

function showData() {
  var text = document.getElementById('textarea').value;
  var result = calculateLengthOfWords(text);
  var i = 0;
  for (i; i < result.length; i++) {
    document.getElementsByClassName('word-data')[i].innerHTML = '  < ' + result[i].toString() + ' > ';
  }
}
