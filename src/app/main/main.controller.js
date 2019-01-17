angular.module('main.controllers.MainCtrl', [])
  .controller('MainCtrl', function(SampleDataService) {
    var data = SampleDataService.getSampleCourses;

    return {
      data: data
    }
  });
