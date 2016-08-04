angular.module('newsCtrl', ['newsService'])

.controller('newsController', function(News) {

	var vm = this;

	// set a processing variable to show loading things
	vm.processing = true;

	// grab all the users at page load
	News.all()
		.success(function(data) {

			// when all the users come back, remove the processing variable
			vm.processing = false;

			// bind the users that come back to vm.users
			vm.news = data;
		});

})

.controller("newsCreateController", function(News) {
	var vm = this;
	vm.type = 'create';

	vm.saveNews = function () {
		vm.processing = true;
		vm.message = '';

		News.create(vm.newsData)
			.success(function (data) {
				vm.processing = false;
				vm.newsData = {};
				vm.message = data.message;
			});
	};
})

.controller("newsEditController", function($routeParams, News) {
	var vm = this;
	vm.type = 'edit';

	News.get($routeParams.news_id)
		.success(function (data) {
			vm.newsData = data;
		});

	vm.saveNews = function () {
		vm.processing = true;
		vm.message = '';
		News.update($routeParams.news_id, vm.newsData)
			.success(function(data){
				vm.processing = false;

				vm.newsData = {};

				vm.message = data.message;
			});
	};
});

