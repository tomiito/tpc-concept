angular.module('main.controllers.MainCtrl', [])
  .controller('MainCtrl', function(SampleDataService) {
    var data = SampleDataService.getSampleCourses;
    var news = SampleDataService.getSampleNews;

    return {
      data: data,
      news: news
    }
  });
