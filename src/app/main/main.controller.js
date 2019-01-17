angular.module('main.controllers.MainCtrl', [])
  .controller('MainCtrl', function(MainService, SampleDataService) {
    var vm = this;
    var data = SampleDataService.getSampleData();

    return {
      data: data
    }
  });
