angular.module('directory.services', [])

    .factory('EmployeeService', function($q) {

        var iData = [
			{
				"id": 1,
				"service": "2D Animation",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 4,
				"title": "President and CEO",
				"department": "Corporate",
				"cellPhone": "617-000-0001",
				"officePhone": "781-000-0001",
				"email": "jking@fakemail.com",
				"city": "Boston, MA",
				"pic": "James_King.jpg",
				"twitterId": "@fakejking",
				"blog": "http://coenraets.org"
			},
			{
				"id": 2,
				"service": "3D Animation",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 2,
				"title": "VP of Marketing",
				"department": "Marketing",
				"cellPhone": "617-000-0002",
				"officePhone": "781-000-0002",
				"email": "jtaylor@fakemail.com",
				"city": "Boston, MA",
				"pic": "Julie_Taylor.jpg",
				"twitterId": "@fakejtaylor",
				"blog": "http://coenraets.org"
			},
			{
				"id": 3,
				"service": "Explainer Videos",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 0,
				"title": "CFO",
				"department": "Accounting",
				"cellPhone": "617-000-0003",
				"officePhone": "781-000-0003",
				"email": "elee@fakemail.com",
				"city": "Boston, MA",
				"pic": "Eugene_Lee.jpg",
				"twitterId": "@fakeelee",
				"blog": "http://coenraets.org"
			},
			{
				"id": 4,
				"service": "Product Advertisement",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 3,
				"title": "VP of Engineering",
				"department": "Engineering",
				"cellPhone": "617-000-0004",
				"officePhone": "781-000-0004",
				"email": "jwilliams@fakemail.com",
				"city": "Boston, MA",
				"pic": "John_Williams.jpg",
				"twitterId": "@fakejwilliams",
				"blog": "http://coenraets.org"
			},
			{
				"id": 5,
				"service": "Promo",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 2,
				"title": "VP of Sales",
				"department": "Sales",
				"cellPhone": "617-000-0005",
				"officePhone": "781-000-0005",
				"email": "rmoore@fakemail.com",
				"city": "Boston, MA",
				"pic": "Ray_Moore.jpg",
				"twitterId": "@fakermoore",
				"blog": "http://coenraets.org"
			},
			{
				"id": 6,
				"service": "Documentary",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 0,
				"title": "QA Manager",
				"department": "Engineering",
				"cellPhone": "617-000-0006",
				"officePhone": "781-000-0006",
				"email": "pjones@fakemail.com",
				"city": "Boston, MA",
				"pic": "Paul_Jones.jpg",
				"twitterId": "@fakepjones",
				"blog": "http://coenraets.org"
			},
			{
				"id": 7,
				"service": "Visual Effects",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 0,
				"title": "Software Architect",
				"department": "Engineering",
				"cellPhone": "617-000-0007",
				"officePhone": "781-000-0007",
				"email": "pgates@fakemail.com",
				"city": "Boston, MA",
				"pic": "Paula_Gates.jpg",
				"twitterId": "@fakepgates",
				"blog": "http://coenraets.org"
			},
			{
				"id": 8,
				"service": "Holographic Projections",
				"content_type": "video",
				"managerId": 0,
				"managerName": "",
				"reports": 0,
				"title": "Marketing Manager",
				"department": "Marketing",
				"cellPhone": "617-000-0008",
				"officePhone": "781-000-0008",
				"email": "lwong@fakemail.com",
				"city": "Boston, MA",
				"pic": "Lisa_Wong.jpg",
				"twitterId": "@fakelwong",
				"blog": "http://coenraets.org"
			},
			{
				"id": 9,
				"service": "IT Services",
				"content_type": "text",
				"managerId": 0,
				"managerName": "",
				"reports": 0,
				"title": "Marketing Manager",
				"department": "Marketing",
				"cellPhone": "617-000-0009",
				"officePhone": "781-000-0009",
				"email": "gdonovan@fakemail.com",
				"city": "Boston, MA",
				"pic": "Gary_Donovan.jpg",
				"twitterId": "@fakegdonovan",
				"blog": "http://coenraets.org"
			},
			{
				"id": 10,
				"service": "eLearning",
				"content_type": "text",
				"managerId": 0,
				"managerName": "",
				"reports": 0,
				"title": "Sales Representative",
				"department": "Sales",
				"cellPhone": "617-000-0010",
				"officePhone": "781-000-0010",
				"email": "kbyrne@fakemail.com",
				"city": "Boston, MA",
				"pic": "Kathleen_Byrne.jpg",
				"twitterId": "@fakekbyrne",
				"blog": "http://coenraets.org"
			// },
			// {
				// "id": 11,
				// "service": "Amy",
				// "content_type": "Jones",
				// "managerId": 5,
				// "managerName": "Ray Moore",
				// "reports": 0,
				// "title": "Sales Representative",
				// "department": "Sales",
				// "cellPhone": "617-000-0011",
				// "officePhone": "781-000-0011",
				// "email": "ajones@fakemail.com",
				// "city": "Boston, MA",
				// "pic": "Amy_Jones.jpg",
				// "twitterId": "@fakeajones",
				// "blog": "http://coenraets.org"
			// },
			// {
				// "id": 12,
				// "service": "Steven",
				// "content_type": "Wells",
				// "managerId": 4,
				// "managerName": "John Williams",
				// "reports": 0,
				// "title": "Software Architect",
				// "department": "Engineering",
				// "cellPhone": "617-000-0012",
				// "officePhone": "781-000-0012",
				// "email": "swells@fakemail.com",
				// "city": "Boston, MA",
				// "pic": "Steven_Wells.jpg",
				// "twitterId": "@fakeswells",
				// "blog": "http://coenraets.org"
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