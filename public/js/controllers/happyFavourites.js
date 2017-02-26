angular.module('tallyApp')
  .controller('HappyFavouritesIndexController', HappyFavouritesIndexController)
  .controller('HappyFavouritesNewController', HappyFavouritesNewController)
  .controller('HappyFavouritesShowController', HappyFavouritesShowController)
  .controller('HappyFavouritesEditController', HappyFavouritesEditController);


HappyFavouritesIndexController.$inject = ['HappyFavourite'];
function HappyFavouritesIndexController(HappyFavourite) {
  const happyFavouritesIndex = this;

  happyFavouritesIndex.all = HappyFavourite.query();
}

HappyFavouritesNewController.$inject = ['HappyFavourite', '$state'];
function HappyFavouritesNewController(HappyFavourite, $state) {
  const happyFavouritesNew = this;

  happyFavouritesNew.happyFavourite = {};

  function create() {
    HappyFavourite.save(happyFavouritesNew.happyFavourite, () => {
      $state.go('happyFavouritesIndex');
    });
  }

  happyFavouritesNew.create = create;
}

HappyFavouritesShowController.$inject = ['HappyFavourite', '$state', '$auth'];
function HappyFavouritesShowController(HappyFavourite, $state, $auth) {
  const happyFavouritesShow = this;

  happyFavouritesShow.happyFavourite = HappyFavourite.get($state.params);

  function deleteHappyFavourite() {
    happyFavouritesShow.happyFavourite.$remove(() => {
      $state.go('happyFavouritesIndex');
    });
  }

  happyFavouritesShow.delete = deleteHappyFavourite;
  happyFavouritesShow.isLoggedIn = $auth.isAuthenticated;
}

HappyFavouritesEditController.$inject = ['HappyFavourite', '$state'];
function HappyFavouritesEditController(HappyFavourite, $state) {
  const happyFavouritesEdit = this;

  happyFavouritesEdit.happyFavourite = HappyFavourite.get($state.params);

  function update() {
    happyFavouritesEdit.happyFavourite.$update(() => {
      $state.go('happyFavouritesShow', $state.params);
    });
  }

  this.update = update;

}
