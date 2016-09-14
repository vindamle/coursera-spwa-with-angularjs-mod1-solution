(function() {
  'use strict';
  angular.module('lunchCheck', [])
  .controller('lunchCheckController', lunchCheckController);
  lunchCheckController.$inject = ['$scope'];
  function lunchCheckController($scope) {
   $scope.lunchMenu = '';
   $scope.message = '';
   $scope.lunchItemCount = 0;
   $scope.inputError = true;
   $scope.check = function() {
     var lunchItems = $scope.lunchMenu.split(',').filter(isNotEmptyOrBlank);
    $scope.lunchItemCount = lunchItems.length;
    if ($scope.lunchItemCount == 0) {
      $scope.message = 'Please enter data first';
      $scope.inputError = true;
    }
    else if ($scope.lunchItemCount <= 3) {
      $scope.message = 'Enjoy!';
      $scope.inputError = false;
    }
    else {
      $scope.message = 'Too much!';
      $scopr.inputError = false;
    }
   }
   function isNotEmptyOrBlank(item) {
     return item.trim() != '';
   }
  }
})();
