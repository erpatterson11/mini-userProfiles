angular.module('quoteBook').service('mainService', function() {

  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];


// Add a unique id parameter/value to each quote
  var addID = function() {
    for (var i = 0; i < quotes.length; i++) {
      quotes[i].id = i;
    }
  };

  addID();

// Send entire quotes array to controller usning controller function of same name
  this.getQuotes = function() {
    return quotes;
  };

// Add new quote to array based on user input passed through controller function of same name
  this.addQuote = function(newQuote) {
    quotes.push({
      text: newQuote.text,
      author: newQuote.author
    })
    addID();
  };

// remove quote from user ID input passed through controller.
// ID should match position in array. Once quote is removed, quote IDs are recalculated
  this.removeQuote = function(removalID) {
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].id == removalID) {
        quotes.splice(i,1);
      }
    }
    addID();
  };


}) // end of mainService function
