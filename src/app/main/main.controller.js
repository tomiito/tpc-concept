angular.module('main.controllers.MainCtrl', [])
  .controller('MainCtrl', function(SampleDataService) {
    var main = SampleDataService.getSampleMain;
    var data = SampleDataService.getSampleCourses;
    var news = SampleDataService.getSampleNews;

    return {
      main: main,
      data: data,
      news: news
    }
  });
