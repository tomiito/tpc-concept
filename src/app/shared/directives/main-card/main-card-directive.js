angular.module('shared.directives.mainCard', [])
  .directive('mainCard', ['$window', function($window) {
    return {
      restrict: 'E',
      scope: {
        item: '='
      },
      templateUrl: 'shared/directives/main-card/main-card.view.html',
      link: function (scope, elem) {
        console.log(scope.course);
      }
    };
  }]);
