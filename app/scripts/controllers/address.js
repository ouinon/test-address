'use strict';

angular.module('addressApp')
.controller('AddressCtrl',['$scope','$location','contactsFact', function ($scope, $location, contacts) {


    $scope.editContact = function ( contact ) {

        var url = ['address/edit/',contact.name].join('');

        $location.path(url);

    };

    var init = (function(){

        $scope.contacts = contacts.data;

    })();

}]);