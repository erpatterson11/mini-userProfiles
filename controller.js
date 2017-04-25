angular.module('quoteBook').controller('MainController', function($scope, mainService){

$scope.getQuotes = function() {
  $scope.quotes = mainService.getQuotes();
}();

$scope.addQuote = function(newQuote) {
  mainService.addQuote(newQuote);
  $scope.newQuote = {};
}

$scope.removeQuote = function(removalID) {
  mainService.removeQuote(removalID);
}




}) // end of controller
