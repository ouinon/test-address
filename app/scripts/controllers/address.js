'use strict';

angular.module('addressApp')
.controller('AddressCtrl',['$scope','contactsFact', function ($scope, contacts) {


    var init = (function(){

        console.log(contacts.data);

        $scope.contacts = contacts.data;

    })();


}]);
