'use strict';

angular.module('addressApp')
.controller('ContactCtrl',['$scope', '$routeParams','contactsFact',function ($scope, $routeParams, contactFact) {

	var name = $routeParams.name || false;

    var init = (function(){

    	if(name){
    		contactFact.getContact(name);
    	}

    })();


}]);
