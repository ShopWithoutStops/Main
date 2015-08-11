angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$location', '$rootScope','$http','Todos'
	,function($scope, $location, $rootScope, $http, Todos) {


			$scope.totalDisplayed = 12;
            $scope.loadMore = function () {
                $scope.totalDisplayed +=12;
            };
		$scope.formData = {};
		$scope.loading = true;


		 
		// console.log('main.js console output');
 
         //    $location.path('/login');
		// console.log('main.js console output'+$location.path());
		// $rootScope.mymodel  = $location.path();
 
		// console.log("223d "+$rootScope.mymodel);
		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of products
					});
			}
		};
		
		// UPDATE ==================================================================
		
	/*	$scope.updateTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			$scope.formData.text == data 
			//	$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.u($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		}; */
		

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			
			$scope.loading = true;


			if (confirm('Are you sure you want to delete this?')) {
				Todos.delete(id)
				// if successful deletion, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
			}
		};
	}]);