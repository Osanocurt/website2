angular.module('tallyApp')
  .factory('PersonalTraining', PersonalTraining);

PersonalTraining.$inject = ['$resource'];
function PersonalTraining($resource) {
  return new $resource('/personalTrainings/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
