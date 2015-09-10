'use strict';

angular.module('addressApp')
	.filter('namesFilter',['$filter',function($filter) {

	function nameFilter(contacts, search) {
		
		if (!search){
			// Return everyone
			return contacts;
		}

		return $filter('filter')(contacts,{name: search.name, phone: search.phone});

	}

	return nameFilter;

}]);	