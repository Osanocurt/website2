angular.module('tallyApp')
  .controller('TravelsIndexController', TravelsIndexController)
  .controller('TravelsNewController', TravelsNewController)
  .controller('TravelsShowController', TravelsShowController)
  .controller('TravelsEditController', TravelsEditController);


TravelsIndexController.$inject = ['Travel'];
function TravelsIndexController(Travel) {
  const travelsIndex = this;

  travelsIndex.all = Travel.query();
}

TravelsNewController.$inject = ['Travel', '$state'];
function TravelsNewController(Travel, $state) {
  const travelsNew = this;

  travelsNew.travel = {};

  function create() {
    Travel.save(travelsNew.travel, () => {
      $state.go('travelsIndex');
    });
  }

  travelsNew.create = create;
}

TravelsShowController.$inject = ['Travel', '$state', '$auth'];
function TravelsShowController(Travel, $state, $auth) {
  const travelsShow = this;

  travelsShow.travel = Travel.get($state.params);

  function deleteTravel() {
    travelsShow.travel.$remove(() => {
      $state.go('travelsIndex');
    });
  }

  travelsShow.delete = deleteTravel;
  travelsShow.isLoggedIn = $auth.isAuthenticated;
}

TravelsEditController.$inject = ['Travel', '$state'];
function TravelsEditController(Travel, $state) {
  const travelsEdit = this;

  travelsEdit.travel = Travel.get($state.params);

  function update() {
    travelsEdit.travel.$update(() => {
      $state.go('travelsShow', $state.params);
    });
  }

  this.update = update;

}
