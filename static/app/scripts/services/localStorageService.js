'use strict';

/**
 * @ngdoc service
 * @name appApp.localStorageService
 * @description
 * # localStorageService
 * Service in the appApp.
 */
angular.module('IoTWorkshopWebApp')
  .factory('localStorageService', function localStorageService() {
        /*initiating*/

        var data = {};


/*
        data.plugs = JSON.parse(localStorage.getItem("plugs"));
        if (data.plugs == null) {
            data.plugs = [];
        }
*/



        /*generic version*/
        var setList = function (listKey, listData) {
            //set a common ground (empty array object)
            if (data[listKey]) {
                data[listKey].splice(0, data[listKey].length);
            } else {
                data[listKey] = [];
            }

            //start filling list
            var list = data[listKey];

            for (var i = 0; i < listData.length; i++) {
                list.push(listData[i]);
            }

            //and push to localStorage
            setLocalStorageItem(listKey, list);

        };

        var removeItemFromList = function (listKey, item) {
            var index = getItemIndexInArrayByItemId(item, data[listKey]);
            if (index >= 0) {
                data[listKey].splice(index, 1);
                setLocalStorageItem('listKey', data[listKey]);
            }
        };

        var updateItemInList = function (listKey, item) {
            var index = getItemIndexInArrayByItemId(item, data[listKey]);
            if (index >= 0) {
                data[listKey][index] = item;
            } else {
                data[listKey].push(item);
            }
        };

        var getList = function (listKey) {
            return data[listKey];
        };


        /* utility functions */

        var getItemIndexInArrayByItemId = function (item, array) {
            if (array) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i].id === item.id) {
                        return i;
                    }
                }
            }
            return -1;
        };


        var setLocalStorageItem = function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        };

        var getLocalStorageItem = function (key) {
            return JSON.parse(localStorage.getItem(key));
        };


// Public API here
        return {
            setList: setList,
            removeItemFromList: removeItemFromList,
            updateItemInList: updateItemInList,
            getList: getList,
            setLocalStorageItem: setLocalStorageItem,
            getLocalStorageItem: getLocalStorageItem
        };
  });
