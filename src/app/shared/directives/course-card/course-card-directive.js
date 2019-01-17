angular.module('shared.directives.courseCard', [])
  .directive('courseCard', ['$window', function($window) {
    return {
      restrict: 'E',
      scope: {
        course: '='
      },
      templateUrl: 'shared/directives/course-card/course-card.view.html',
      link: function (scope, elem) {
        console.log(scope.course);
      }
    };
  }]);
