angular.module('newsService', [])

.factory('News', function($http) {

	// create a new object
	var newsFactory = {};

	// get a single news
	newsFactory.get = function(id) {
		return $http.get('/api/news/' + id);
	};

	// get all news
	newsFactory.all = function() {
		return $http.get('/api/news/');
	};

	// create a user
	newsFactory.create = function(newsData) {
		return $http.post('/api/news/', newsData);
	};

	// update a news
	newsFactory.update = function(id, newsData) {
		return $http.put('/api/news/'+id, newsData);
	};

	// return our entire userFactory object
	return newsFactory;

});