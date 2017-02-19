angular
  .module('tallyApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: '/templates/about.html'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/templates/home.html'
  })
  .state('workoutsIndex', {
    url: '/workouts',
    templateUrl: '/templates/workoutsIndex.html',
    controller: 'WorkoutsIndexController as workoutsIndex'
  })
  .state('workoutsNew', {
    url: '/workouts/new',
    templateUrl: '/templates/workoutsNew.html',
    controller: 'WorkoutsNewController as workoutsNew'
  })
  .state('workoutsShow', {
    url: '/workouts/:id',
    templateUrl: '/templates/workoutsShow.html',
    controller: 'WorkoutsShowController as workoutsShow'
  })
  .state('workoutsEdit', {
    url: '/workouts/:id/edit',
    templateUrl: '/templates/workoutsEdit.html',
    controller: 'WorkoutsEditController as workoutsEdit'
  })
    .state('blogsIndex', {
      url: '/blogs',
      templateUrl: '/templates/blogsIndex.html',
      controller: 'BlogsIndexController as blogsIndex'
    })
    .state('blogsNew', {
      url: '/blogs/new',
      templateUrl: '/templates/blogsNew.html',
      controller: 'BlogsNewController as blogsNew'
    })
    .state('blogsShow', {
      url: '/blogs/:id',
      templateUrl: '/templates/blogsShow.html',
      controller: 'BlogsShowController as blogsShow'
    })
    .state('blogsEdit', {
      url: '/blogs/:id/edit',
      templateUrl: '/templates/blogsEdit.html',
      controller: 'BlogsEditController as blogsEdit'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    });

  $urlRouterProvider.otherwise('/home');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';
  $authProvider.facebook({
    clientId: '1512932325402819'
  });

  $authProvider.github({
    clientId: '7ca9786a512ecaaaa4b2'
  });
}
