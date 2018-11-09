function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }

  return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  let i = 0;

  while (i < facts.length) {
<<<<<<< HEAD
    newFacts.push(facts[i] + "!!!");
    i++;
=======
    newFacts.push( newFacts + "!!!");
    i++ ;
>>>>>>> 3ee16e630716aaaa7fb993b164ef9560a4c5f0c1
  }

  return newFacts;
}

function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    n++ ;
  } while (n < 15);

  return array;
}
