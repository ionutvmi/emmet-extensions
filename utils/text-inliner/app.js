var app = angular.module('text-inliner', []);

app.controller('MainCtrl', function($scope) {

  $scope.encode = function() {
    var newVal = $scope.data || '';
    newVal = newVal.replace(/ {4}/g, "\t");

    if ($scope.escapeSymbols) {
      newVal = newVal.replace(/(\$|\|)/g, '\\$1');
    }

    $scope.output = JSON.stringify(newVal);

  };

  $scope.decode = function() {
    var newVal = $scope.data || '';
    try {
      newVal = JSON.parse(newVal).toString()
    } catch(e) {
      newVal = e.toString();
    }

    $scope.output = newVal;
  };


});
