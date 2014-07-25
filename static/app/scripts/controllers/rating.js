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

        //old
        $scope.faster = function () {
            $http.put("/api/speed/increase", {"participant": $scope.participant});
        }


        $scope.slower = function () {
            $http.put("/api/speed/decrease", {"participant": $scope.participant});
        }

        $scope.moreTheory = function(){
            $http.put("/api/theory/increase", {"participant": $scope.participant});
        }

        $scope.lessTheory = function(){
            $http.put("/api/theory/decrease", {"participant": $scope.participant});
        }

    });
