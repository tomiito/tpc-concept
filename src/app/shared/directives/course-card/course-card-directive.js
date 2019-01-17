angular.module('shared.directives.courseCard', [])
  .directive('courseCard', ['$window', function($window) {
    return {
      restrict: 'E',
      templateUrl: 'shared/directives/course-card/course-card.view.html',
      link: function (scope, elem) {
        elem.bind('click', function () {
          $window.history.back();
        });
      }
    };
  }]);
