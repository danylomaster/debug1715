angular.module('weatherApp', [])
.controller('weatherController', ['$scope', '$http', function($scope, $http) {
    $scope.method = 'GET';
    $scope.url = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=df11cc2897e771ab2fb7cbfaf2279ec8';
    
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=df11cc2897e771ab2fb7cbfaf2279ec8').success(function(data){
        $scope.status = data;
    });
    //$scope.status = 'Lviv';
  }]);    