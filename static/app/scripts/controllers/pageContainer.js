'use strict';

angular.module('IoTWorkshopWebApp')
    .controller('pageContainerCtrl', function ($scope, $location, localStorageService) {

        $scope.participant = {

        }
        $scope.participant.name = localStorageService.getLocalStorageItem('participantName');

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    });
