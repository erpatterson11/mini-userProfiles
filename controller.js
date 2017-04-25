angular.module('userProfiles').controller('MainController', function($scope, mainService){

$scope.getUsers = function() {
  $scope.users = mainService.getUsers();
  console.log($scope.users);
};

$scope.getUsers();

$scope.toggleFavorite = function(userID) {
  mainService.toggleFavorite(userID);
}





}) // end of controller
