angular.module('tallyApp')
  .controller('FavouritesIndexController', FavouritesIndexController)
  .controller('FavouritesNewController', FavouritesNewController)
  .controller('FavouritesShowController', FavouritesShowController)
  .controller('FavouritesEditController', FavouritesEditController);


FavouritesIndexController.$inject = ['Favourite'];
function FavouritesIndexController(Favourite) {
  const favouritesIndex = this;

  favouritesIndex.all = Favourite.query();
}

FavouritesNewController.$inject = ['Favourite', '$state'];
function FavouritesNewController(Favourite, $state) {
  const favouritesNew = this;

  favouritesNew.favourite = {};

  function create() {
    Favourite.save(favouritesNew.favourite, () => {
      $state.go('favouritesIndex');
    });
  }

  favouritesNew.create = create;
}

FavouritesShowController.$inject = ['Favourite', '$state', '$auth'];
function FavouritesShowController(Favourite, $state, $auth) {
  const favouritesShow = this;

  favouritesShow.favourite = Favourite.get($state.params);

  function deleteFavourite() {
    favouritesShow.favourite.$remove(() => {
      $state.go('favouritesIndex');
    });
  }

  favouritesShow.delete = deleteFavourite;
  favouritesShow.isLoggedIn = $auth.isAuthenticated;
}

FavouritesEditController.$inject = ['Favourite', '$state'];
function FavouritesEditController(Favourite, $state) {
  const favouritesEdit = this;

  favouritesEdit.favourite = Favourite.get($state.params);

  function update() {
    favouritesEdit.favourite.$update(() => {
      $state.go('favouritesShow', $state.params);
    });
  }

  this.update = update;

}
