angular.module('tallyApp')
  .controller('EatFavouritesIndexController', EatFavouritesIndexController)
  .controller('EatFavouritesNewController', EatFavouritesNewController)
  .controller('EatFavouritesShowController', EatFavouritesShowController)
  .controller('EatFavouritessEditController', EatFavouritesEditController);


EatFavouritesIndexController.$inject = ['EatFavourite'];
function EatFavouritesIndexController(EatFavourite) {
  const eatFavouritesIndex = this;

  eatFavouritesIndex.all = EatFavourite.query();
}

EatFavouritesNewController.$inject = ['EatFavourite', '$state'];
function EatFavouritesNewController(EatFavourite, $state) {
  const eatFavouritesNew = this;

  eatFavouritesNew.eatFavourite = {};

  function create() {
    EatFavourite.save(eatFavouritesNew.eatFavourite, () => {
      $state.go('eatFavouritesIndex');
    });
  }

  eatFavouritesNew.create = create;
}

EatFavouritesShowController.$inject = ['EatFavourite', '$state', '$auth'];
function EatFavouritesShowController(EatFavourite, $state, $auth) {
  const eatFavouritesShow = this;

  eatFavouritesShow.eatFavourite = EatFavourite.get($state.params);

  function deleteEatFavourite() {
    eatFavouritesShow.eatFavourite.$remove(() => {
      $state.go('eatFavouritesIndex');
    });
  }

  eatFavouritesShow.delete = deleteEatFavourite;
  eatFavouritesShow.isLoggedIn = $auth.isAuthenticated;
}

EatFavouritesEditController.$inject = ['EatFavourite', '$state'];
function EatFavouritesEditController(EatFavourite, $state) {
  const eatFavouritesEdit = this;

  eatFavouritesEdit.eatFavourite = EatFavourite.get($state.params);

  function update() {
    eatFavouritesEdit.eatFavourite.$update(() => {
      $state.go('eatFavouritesShow', $state.params);
    });
  }

  this.update = update;

}
