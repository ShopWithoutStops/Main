

var scotchTodo = angular.module('scotchTodo', ['todoController', 'todoService']);

scotchTodo.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});


  scotchTodo.controller('validationCtrlr', function($scope) {

    // function to submit the form after all validation has occurred      
    $scope.submittForm = function() {

      // check to make sure the form is completely valid
      if ($scope.productForm.$valid) {
        alert('Congratulations! New Product added to the Database');
      }

    };

  });



