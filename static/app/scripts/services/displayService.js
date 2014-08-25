'use strict';

/**
 * @ngdoc service
 * @name ioTworkshopWebappApp.displayService
 * @description
 * # displayService
 * Service in the ioTworkshopWebappApp.
 */
angular.module('IoTWorkshopWebApp')
  .factory('displayService', function displayService() {
            var switchDisplayState = function (elementID) {

                //add # to string if not present..
                elementID = fixIDString(elementID);

                //hides shown element and displays hidden elements with a nice animation
                var element = $(elementID);

                if (element.css('display') === 'none') {
                    element.fadeIn();
                } else {
                    element.fadeOut();
                }


            };

            var fadeSwitchTwoElements = function (elementOneID, elementTwoID) {

                elementOneID = fixIDString(elementOneID);
                elementTwoID = fixIDString(elementTwoID);

                var elOne = $(elementOneID);
                var elTwo = $(elementTwoID);

                if (elOne.is(':visible') && elTwo.is(':hidden')) {
                    elOne.fadeOut();
                    setTimeout(function () {
                        elTwo.fadeIn();
                    }, 420);
                }
                else{
                    elTwo.fadeOut();
                    setTimeout(function () {
                        elOne.fadeIn();
                    }, 420);

                }
            };

            var fixIDString = function (string) {
                if (!/^[#]/.test(string)) {
                    return '#'.concat(string);
                }
                return string;
            };

            /*var userAcceptsQuestion = function(questionForUser){

                var msgbox = $dialog.messageBox('', questionForUser, [
                    {label: 'Ja', result: true},
                    {label: 'Nein', result: false}
                ]);
                return msgbox.open().then(function (result) {
                    return result;
                });
            }*/

            var goToInit = function (){
                $.fn.goTo = function() {
                    $('html, body').animate({
                        scrollTop: $(this).offset().top + 'px'
                    }, 'fast');
                    return this; // for chaining...
                };
            };

            goToInit();

            return {
                switchDisplayState: switchDisplayState,
                fadeSwitchTwoElements: fadeSwitchTwoElements/*,
                userAcceptsQuestion:userAcceptsQuestion*/
            };
        });

