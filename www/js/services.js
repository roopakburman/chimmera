angular.module('directory.services', [])

    .factory('EmployeeService', function($q) {
        var iData = [
			{
				"id": 1,
				"service": "2D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 2,
				"title": "2D Animation",
				"cellPhone": "617-000-0001",
				"officePhone": "781-000-0001",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 2,
				"service": "3D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 6,
				"title": "3D Animation",
				"department": "",
				"cellPhone": "617-000-0002",
				"officePhone": "781-000-0002",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 3,
				"service": "Explainer Videos",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 7,
				"title": "Explainer Videos",
				"cellPhone": "617-000-0003",
				"officePhone": "781-000-0003",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www,chimmera.com"
			},
			{
				"id": 4,
				"service": "Product Advertisement",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 2,
				"title": "Product Advertisement",
				"cellPhone": "617-000-0004",
				"officePhone": "781-000-0004",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 5,
				"service": "Promo",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 3,
				"title": "Promo",
				"cellPhone": "617-000-0005",
				"officePhone": "781-000-0005",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 6,
				"service": "Documentary",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 3,
				"title": "Documentary",
				"cellPhone": "617-000-0006",
				"officePhone": "781-000-0006",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 7,
				"service": "Visual Effects",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 1,
				"title": "Visual Effects",
				"cellPhone": "617-000-0007",
				"officePhone": "781-000-0007",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 8,
				"service": "Holographic Projections",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 3,
				"title": "Holographic Projections",
				"cellPhone": "617-000-0008",
				"officePhone": "781-000-0008",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 9,
				"service": "IT Services",
				"content_type": "text",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 3,
				"title": "IT Services",
				"cellPhone": "617-000-0009",
				"officePhone": "781-000-0009",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 10,
				"service": "eLearning",
				"content_type": "text",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "",
				"managerId": 0,
				"managerName": "",
				"iContent": 1,
				"title": "eLearning",
				"cellPhone": "617-000-0010",
				"officePhone": "781-000-0010",
				"email": "info@chimmera.com",
				"city": "Boston, MA",
				"twitterId": "@chimmeraAnimations",
				"site": "http://www.chimmera.com"
			},
			{
				"id": 11,
				"service": "2D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 1,
				"managerName": "2D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			},
			{
				"id": 12,
				"service": "2D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 1,
				"managerName": "2D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			},
			{
				"id": 13,
				"service": "3D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 2,
				"managerName": "3D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			},
			{
				"id": 14,
				"service": "3D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 2,
				"managerName": "3D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			},
			{
				"id": 15,
				"service": "3D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 2,
				"managerName": "3D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			},
			{
				"id": 16,
				"service": "3D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 2,
				"managerName": "3D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			},
			{
				"id": 17,
				"service": "3D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 2,
				"managerName": "3D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			},
			{
				"id": 18,
				"service": "3D Animation",
				"content_type": "video",
				"content_details": "A simple 1 liner info should be good enough",
				"vPath" : "PYJS92m4mok",
				"managerId": 2,
				"managerName": "3D Animation",
				"iContent": 0,
				"title": "Title of the Animation",
				"cellPhone": "",
				"officePhone": "",
				"email": "",
				"city": "",
				"twitterId": "",
				"site": ""
			}
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(iData);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var employee = iData[employeeId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = iData.filter(function(element) {
                    var fullName = element.service + " " + element.content_type + element.department;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = iData.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    });
	
	
	