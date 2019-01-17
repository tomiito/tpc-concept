angular.module('main.services.MainService', [])
  .factory('MainService', function() {

    var toDoItems = [

    ];

    var service = {
      getItems: toDoItems
    };
    return service;

  });
