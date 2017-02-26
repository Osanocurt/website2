angular.module('tallyApp')
  .controller('PersonalTrainingsIndexController', PersonalTrainingsIndexController)
  .controller('PersonalTrainingsNewController', PersonalTrainingsNewController)
  .controller('PersonalTrainingsShowController', PersonalTrainingsShowController)
  .controller('PersonalTrainingsEditController', PersonalTrainingsEditController);


PersonalTrainingsIndexController.$inject = ['PersonalTraining'];
function PersonalTrainingsIndexController(PersonalTraining) {
  const personalTrainingsIndex = this;

  personalTrainingsIndex.all = PersonalTraining.query();
}

PersonalTrainingsNewController.$inject = ['PersonalTraining', '$state'];
function PersonalTrainingsNewController(PersonalTraining, $state) {
  const personalTrainingsNew = this;

  personalTrainingsNew.personalTraining = {};

  function create() {
    PersonalTraining.save(personalTrainingsNew.personalTraining, () => {
      $state.go('personalTrainingsIndex');
    });
  }

  personalTrainingsNew.create = create;
}

PersonalTrainingsShowController.$inject = ['PersonalTraining', '$state', '$auth'];
function PersonalTrainingsShowController(PersonalTraining, $state, $auth) {
  const personalTrainingsShow = this;

  personalTrainingsShow.personalTraining = PersonalTraining.get($state.params);

  function deletePersonalTraining() {
    personalTrainingsShow.personalTraining.$remove(() => {
      $state.go('personalTrainingsIndex');
    });
  }

  personalTrainingsShow.delete = deletePersonalTraining;
  personalTrainingsShow.isLoggedIn = $auth.isAuthenticated;
}

PersonalTrainingsEditController.$inject = ['PersonalTraining', '$state'];
function PersonalTrainingsEditController(PersonalTraining, $state) {
  const personalTrainingsEdit = this;

  personalTrainingsEdit.personalTraining = PersonalTraining.get($state.params);

  function update() {
    personalTrainingsEdit.personalTraining.$update(() => {
      $state.go('personalTrainingsShow', $state.params);
    });
  }

  this.update = update;

}
