/**
 * angular-material-boilerplate v1.0.0
 * Copyright (c) 2019 Cathal Mac Donnacha
 * Licensed under MIT
 */
angular.module('angular-material-boilerplate', [
  /**
   * Dependencies must be injected in specific order:
   * 1) AngularJS dependencies
   * 2) Compiled HTML templates
   * 3) Common Services, Directives, Filters and Utilities
   * 4) Main App Layout
   * 5) Other App components (e.g. Toolbar, About, etc)
   */

  // AngularJS dependencies
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ui.router',
  'ngResource',

  // Include compiled HTML templates
  'templates',

  // Common/shared code
  'app.shared',

  // Layout
  'app.layout',

  // Components
  'app.toolbar',
  'app.sidenav',
  'app.main',
  'app.about'
])

.config(["$mdThemingProvider", function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('purple', {
      'default': '200'
    });
}])

.run(['$state', function ($state) {
  $state.go('main');
}]);

angular.module('about.controllers.AboutCtrl', [])
  .controller('AboutCtrl', function() {
    var vm = this;
    vm.message = 'And here is where I tell you all about myself.';
  });

angular.module('app.about', [
  'ui.router',
  'about.controllers.AboutCtrl'
])

.config(["$stateProvider", function config($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'about/about.view.html'
  });
}]);

angular.module('layout.controllers.LayoutCtrl', [])
  .controller('LayoutCtrl', function() {

  });

angular.module('app.layout', [
  'ui.router',
  'layout.controllers.LayoutCtrl'
])

.config(["$stateProvider", function config($stateProvider) {
  $stateProvider.state('layout', {
    url: '/layout',
    templateUrl: 'layout/layout.view.html'
  });
}]);

angular.module('main.controllers.MainCtrl', [])
  .controller('MainCtrl', ["MainService", function(MainService) {
    var vm = this;

  }]);

angular.module('app.main', [
  'ui.router',
  'main.controllers.MainCtrl',
  'main.services.MainService'
])

.config(["$stateProvider", function config($stateProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'main/main.view.html'
  });
}]);

angular.module('main.services.MainService', [])
  .factory('MainService', function() {

    var toDoItems = [

    ];

    var service = {
      getItems: toDoItems
    };
    return service;

  });

angular.module('app.shared', [
  'shared.directives.backButton',
  'shared.directives.courseCard',
  'shared.services.Utils'
]);

angular.module('sidenav.controllers.SideNavCtrl', [])
  .controller('SideNavCtrl', ["$mdSidenav", "$state", "SideNav", function($mdSidenav, $state, SideNav) {
    var vm = this;
    vm.selectMenuItem = selectMenuItem;
    vm.closeSideNav = closeSideNav;
    vm.menuItems = SideNav.getMenuItems;
    vm.selected = vm.menuItems[0];

    function selectMenuItem(menuItem) {
      vm.selected = menuItem;
      closeSideNav();
      $state.go(menuItem.route);
    }

    function closeSideNav() {
      $mdSidenav('left').close();
    }
  }]);

angular.module('app.sidenav', [
  'sidenav.controllers.SideNavCtrl',
  'sidenav.services.SideNav'
]);


angular.module('sidenav.services.SideNav', [])
  .factory('SideNav', function() {

    var menuItems = [
      {
        name: 'To-Do',
        icon: '',
        route: 'todo'
      },
      {
        name: 'About',
        icon: '',
        route: 'about'
      }
    ];

    var service = {
      getMenuItems: menuItems
    };
    return service;

  });

angular.module('toolbar.controllers.ToolbarCtrl', [])
  .controller('ToolbarCtrl', ["$state", "$scope", function($state, $scope) {
  }]);

angular.module('app.toolbar', [
  'toolbar.controllers.ToolbarCtrl'
]);

angular.module('shared.directives.backButton', [])
  .directive('backButton', ['$window', function($window) {
    return {
      restrict: 'A',
      link: function (scope, elem) {
        elem.bind('click', function () {
          $window.history.back();
        });
      }
    };
  }]);

angular.module('shared.services.Utils', [])
  .factory('Utils', function Utils() {

    var service = {
      isNullOrUndefined: isNullOrUndefined,
      isUndefinedOrWhitespace: isUndefinedOrWhitespace,
      isNullOrWhitespace: isNullOrWhitespace,
      isNullOrUndefinedOrWhitespace: isNullorUndefinedOrWhitespace
    };
    return service;

    function isNullOrUndefined(object) {
      return object === null || angular.isUndefined(object) ? true : false;
    }

    function isUndefinedOrWhitespace(stringText) {
      return angular.isUndefined(stringText) || stringText.trim().length <= 0 ? true : false;
    }

    function isNullorUndefinedOrWhitespace(stringText) {
      if(stringText !== null) {
        return angular.isUndefined(stringText) || stringText.trim().length <= 0 ? true : false;
      } else {
        return true;
      }
    }

    function isNullOrWhitespace(stringText) {
      return stringText === null || stringText.trim().length <= 0 ? true : false;
    }
  });

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
