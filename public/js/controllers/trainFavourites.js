angular.module('tallyApp')
  .controller('TrainFavouritesIndexController', TrainFavouritesIndexController)
  .controller('TrainFavouritesNewController', TrainFavouritesNewController)
  .controller('TrainFavouritesShowController', TrainFavouritesShowController)
  .controller('TrainFavouritesEditController', TrainFavouritesEditController);


TrainFavouritesIndexController.$inject = ['TrainFavourite'];
function TrainFavouritesIndexController(TrainFavourite) {
  const trainFavouritesIndex = this;

  trainFavouritesIndex.all = TrainFavourite.query();
}

TrainFavouritesNewController.$inject = ['TrainFavourite', '$state'];
function TrainFavouritesNewController(TrainFavourite, $state) {
  const trainFavouritesNew = this;

  trainFavouritesNew.trainFavourite = {};

  function create() {
    TrainFavourite.save(trainFavouritesNew.trainFavourite, () => {
      $state.go('trainFavouritesIndex');
    });
  }

  trainFavouritesNew.create = create;
}

TrainFavouritesShowController.$inject = ['TrainFavourite', '$state', '$auth'];
function TrainFavouritesShowController(TrainFavourite, $state, $auth) {
  const trainFavouritesShow = this;

  trainFavouritesShow.trainFavourite = TrainFavourite.get($state.params);

  function deleteTrainFavourite() {
    trainFavouritesShow.trainFavourite.$remove(() => {
      $state.go('trainFavouritesIndex');
    });
  }

  trainFavouritesShow.delete = deleteTrainFavourite;
  trainFavouritesShow.isLoggedIn = $auth.isAuthenticated;
}

TrainFavouritesEditController.$inject = ['TrainFavourite', '$state'];
function TrainFavouritesEditController(TrainFavourite, $state) {
  const trainFavouritesEdit = this;

  trainFavouritesEdit.trainFavourite = TrainFavourite.get($state.params);

  function update() {
    trainFavouritesEdit.trainFavourite.$update(() => {
      $state.go('trainFavouritesShow', $state.params);
    });
  }

  this.update = update;

}
