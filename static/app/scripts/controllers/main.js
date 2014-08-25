'use strict';

/**
 * @ngdoc function
 * @name IoTWorkshopWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the IoTWorkshopWebApp
 */
angular.module('IoTWorkshopWebApp')
  .controller('MainCtrl', function ($scope, $http, localStorageService) {

        $scope.participant = {
        };

        $scope.participant.name = localStorageService.getLocalStorageItem('participantName');

        //we save the entered username to our localStorage and inform the server about the added user
        $scope.saveName = function(name){
            localStorageService.setLocalStorageItem('participantName', name);

            location.reload();
        };

        //we register the user with the server
        $scope.registerUserWithServer = function(){
            $http.post("/api/user/" + $scope.participant.name).success(function(result){
                console.log(result);
            })
        }

        $scope.validateUsername = function () {
            var patt = /^([a-z|0-9]){1,20}$/i;

            if ($scope.participant.name) {
                return patt.test($scope.participant.name);
            }
            return false;

        };


        $scope.hasGotIt = localStorageService.getLocalStorageItem('hasGotIt');
        $scope.isUsernameSet = localStorageService.getLocalStorageItem('participantName');

        $scope.gotIt = function(){
            localStorageService.setLocalStorageItem('hasGotIt', true);
            $scope.hasGotIt = true;
        };

        //we notify the server each time a user opens our page that he part takes. the server might already know or he wont so we add the user on the server side.
        if($scope.participant.name != undefined && $scope.participant.name != null && $scope.participant.name != ""){
            $scope.registerUserWithServer();
        }


  });
