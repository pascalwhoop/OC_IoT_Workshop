'use strict';

angular.module('IoTWorkshopWebApp')
    .controller('RatingCtrl', function ($scope, $http, localStorageService) {

        $scope.participant = {};
        $scope.participant.name = localStorageService.getLocalStorageItem('participantName');


        $scope.speed = function(speed){
            $http.put("/api/user/" + $scope.participant.name + "/speed/" + speed);
        }

        $scope.theory = function(theoryAmount){
            $http.put("/api/user/" + $scope.participant.name + "/theory/" + theoryAmount);
        }


    });
