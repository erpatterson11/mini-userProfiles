angular.module('quoteBook').controller('MainController', function($scope, mainService){

$scope.getQuotes = function() {
  $scope.quotes = mainService.getQuotes();
}();

$scope.addQuote = function(newQuote) {
  mainService.addQuote(newQuote);
}

$scope.removeQuote = function(removalID) {
  mainService.removeQuote(removalID);
}



// $scope.filterQuotes = function() {
//   if($scope.filterAuth) {
//     console.log($scope.typeFilter, "type");
//     return $scope.typeFilter;
//   } else if ($scope.typeFilter) {
//     console.log($scope.typeFilter.author, "select");
//     return $scope.typeFilter.author;
//   }
// }






}) // end of controller
