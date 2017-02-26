angular
  .module('tallyApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('book', {
    url: '/book',
    templateUrl: '/templates/book.html',
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/templates/contact.html',
  })
  .state('about', {
    url: '/about',
    templateUrl: '/templates/about.html',
  })
  .state('home', {
    url: '/home',
    templateUrl: '/templates/home.html',
  })
  .state('favouritesIndex', {
    url: '/favourites',
    templateUrl: '/templates/favouritesIndex.html',
    controller: 'FavouritesIndexController as favouritesIndex'
  })
  .state('favouritesNew', {
    url: '/favourites/new',
    templateUrl: '/templates/favouritesNew.html',
    controller: 'FavouritesNewController as favouritesNew'
  })
  .state('favouritesShow', {
    url: '/favourites/:id',
    templateUrl: '/templates/favouritesShow.html',
    controller: 'FavouritesShowController as favouritesShow'
  })
  .state('favouritesEdit', {
    url: '/favourites:id/edit',
    templateUrl: '/templates/favouritesEdit.html',
    controller: 'FavouritesEditController as favouritesEdit'
  })
  .state('recipesIndex', {
    url: '/recipes',
    templateUrl: '/templates/recipesIndex.html',
    controller: 'RecipesIndexController as recipesIndex'
  })
  .state('recipesNew', {
    url: '/recipes/new',
    templateUrl: '/templates/recipesNew.html',
    controller: 'RecipesNewController as recipesNew'
  })
  .state('recipesShow', {
    url: '/recipes/:id',
    templateUrl: '/templates/recipesShow.html',
    controller: 'RecipesShowController as recipesShow'
  })
  .state('recipesEdit', {
    url: '/recipes:id/edit',
    templateUrl: '/templates/recipesEdit.html',
    controller: 'RecipesEditController as recipesEdit'
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
    .state('travelsIndex', {
      url: '/travels',
      templateUrl: '/templates/travelsIndex.html',
      controller: 'TravelsIndexController as travelsIndex'
    })
    .state('travelsNew', {
      url: '/travels/new',
      templateUrl: '/templates/travelsNew.html',
      controller: 'TravelsNewController as travelsNew'
    })
    .state('travelsShow', {
      url: '/travels/:id',
      templateUrl: '/templates/travelsShow.html',
      controller: 'TravelsShowController as travelsShow'
    })
    .state('travelsEdit', {
      url: '/travels/:id/edit',
      templateUrl: '/templates/travelsEdit.html',
      controller: 'TravelsEditController as travelsEdit'
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
