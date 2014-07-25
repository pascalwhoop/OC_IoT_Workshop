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

        $scope.saveName = function(name){
            localStorageService.setLocalStorageItem('participantName', name);

            $http.post("/api/user/" + name).success(function(result){
                console.log(result);
                //TODO should be a nicer way
                location.reload();
            })
        };

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


  });
