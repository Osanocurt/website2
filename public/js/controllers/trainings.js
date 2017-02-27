angular.module('tallyApp')
  .controller('TrainingsIndexController', TrainingsIndexController)
  .controller('TrainingsNewController', TrainingsNewController)
  .controller('TrainingsShowController', TrainingsShowController)
  .controller('TrainingsEditController', TrainingsEditController);


TrainingsIndexController.$inject = ['Training'];
function TrainingsIndexController(Training) {
  const trainingsIndex = this;

  trainingsIndex.all = Training.query();
}

TrainingsNewController.$inject = ['Training', '$state'];
function TrainingsNewController(Training, $state) {
  const trainingsNew = this;

  trainingsNew.training = {};

  function create() {
    Training.save(trainingsNew.training, () => {
      $state.go('trainingsIndex');
    });
  }

  trainingsNew.create = create;
}

TrainingsShowController.$inject = ['Training', '$state', '$auth'];
function TrainingsShowController(Training, $state, $auth) {
  const trainingsShow = this;

  trainingsShow.training = Training.get($state.params);

  function deleteTraining() {
    trainingsShow.training.$remove(() => {
      $state.go('trainingsIndex');
    });
  }

  trainingsShow.delete = deleteTraining;
  trainingsShow.isLoggedIn = $auth.isAuthenticated;
}

TrainingsEditController.$inject = ['Training', '$state'];
function TrainingsEditController(Training, $state) {
  const trainingsEdit = this;

  trainingsEdit.training = Training.get($state.params);

  function update() {
    trainingsEdit.training.$update(() => {
      $state.go('trainingsShow', $state.params);
    });
  }

  this.update = update;

}
