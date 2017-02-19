angular.module('tallyApp')
  .controller('WorkoutsIndexController', WorkoutsIndexController)
  .controller('WorkoutsNewController', WorkoutsNewController)
  .controller('WorkoutsShowController', WorkoutsShowController)
  .controller('WorkoutsEditController', WorkoutsEditController);


WorkoutsIndexController.$inject = ['Workout'];
function WorkoutsIndexController(Workout) {
  const workoutsIndex = this;

  workoutsIndex.all = Workout.query();
}

WorkoutsNewController.$inject = ['Workout', '$state'];
function WorkoutsNewController(Workout, $state) {
  const workoutsNew = this;

  workoutsNew.workout = {};

  function create() {
    Workout.save(workoutsNew.workout, () => {
      $state.go('workoutsIndex');
    });
  }

  workoutsNew.create = create;
}

WorkoutsShowController.$inject = ['Workout', '$state', '$auth'];
function WorkoutsShowController(Workout, $state, $auth) {
  const workoutsShow = this;

  workoutsShow.workout = Workout.get($state.params);

  function deleteWorkout() {
    workoutsShow.workout.$remove(() => {
      $state.go('workoutsIndex');
    });
  }

  workoutsShow.delete = deleteWorkout;
  workoutsShow.isLoggedIn = $auth.isAuthenticated;
}

WorkoutsEditController.$inject = ['Workout', '$state'];
function WorkoutsEditController(Workout, $state) {
  const workoutsEdit = this;

  workoutsEdit.workout = Workout.get($state.params);

  function update() {
    workoutsEdit.workout.$update(() => {
      $state.go('workoutsShow', $state.params);
    });
  }

  this.update = update;

}
