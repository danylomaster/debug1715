angular.module('weatherApp', [])
.controller('weatherController', ['$scope', '$http', function($scope, $http) {
    $scope.method = 'GET';
    $scope.url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=df11cc2897e771ab2fb7cbfaf2279ec8';
    
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=df11cc2897e771ab2fb7cbfaf2279ec8').success(function(data){
        $scope.status = data;
    });

//      $http({method: $scope.method, url: $scope.url, responseType: 'json' }).
        //then(function(response) {
          //$scope.status = response.status;
          //$scope.data = response.data;
        //}, function(response) {
//          $scope.data = response.data || "Request failed";
//          $scope.status = response.status;
//      });

    //$scope.status = 'Lviv';
  }]);    