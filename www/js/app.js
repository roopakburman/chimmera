// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
angular.module('directory', ['ionic', 'directory.services', 'directory.controllers'])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('employee-index', {
                url: '/iDatas',
                templateUrl: 'templates/employee-index.html',
                controller: 'EmployeeIndexCtrl'
            })

            .state('employee-detail', {
                url: '/employee/:employeeId',
                templateUrl: 'templates/employee-detail.html',
                controller: 'EmployeeDetailCtrl'
            })

            .state('employee-reports', {
                url: '/employee/:employeeId/reports',
                templateUrl: 'templates/employee-reports.html',
                controller: 'EmployeeReportsCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/iDatas');

    })
	.filter('trusted', ['$sce', function ($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	}])
	
	.directive('myYoutube', function($sce) {
	  return {
		restrict: 'EA',
		scope: { code:'=' },
		replace: true,
		template: '<div style="height:auto;"><iframe style="overflow:hidden;height:auto;width:auto" width="auto" height="auto" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
		link: function (scope) {
			console.log('here');
			scope.$watch('code', function (newVal) {
			   if (newVal) {
				   scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
			   }
			});
		}
	  };
	});	
