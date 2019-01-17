angular.module('app.main', [
  'ui.router',
  'main.controllers.MainCtrl',
  'main.services.MainService'
])

.config(function config($stateProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'main/main.view.html'
  });
});
