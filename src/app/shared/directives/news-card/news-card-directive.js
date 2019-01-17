angular.module('shared.directives.newsCard', [])
  .directive('newsCard', ['$window', function($window) {
    return {
      restrict: 'E',
      scope: {
        news: '='
      },
      templateUrl: 'shared/directives/news-card/news-card.view.html',
      link: function (scope, elem) {
        console.log(scope.news);

        scope.doNothing = function(){

        };

      }
    };
  }]);
