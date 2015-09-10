'use strict';

angular.module('addressApp')
.controller('ContactCtrl',['$scope','$location','$routeParams','contactsFact',function ($scope, $location, $routeParams, contactFact) {

    $scope.contact = false;

    var saveContact = function(){

        var key = name;

        return contactFact.setContact(key,$scope.contact);

    };

	var name = $routeParams.name || false;

    var init = (function(){

    	var action = $routeParams.action;

    	var validActionsArr = ['_create','edit'];

        var invalidUrl = validActionsArr.indexOf(action) === -1 || (action === 'edit' && !name);

    	if(invalidUrl){

            // If it isn't a valid action URL
            // Better done with the UI-Router

	    	$location.path('/address');

    	}

    	if(name){

            $scope.contact = contactFact.getContact(name);
    		
            $scope.saveContact = saveContact;          

    	}

    })();


}]);
