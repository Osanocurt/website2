angular.module('tallyApp')
  .factory('Workout', Workout);

Workout.$inject = ['$resource'];
function Workout($resource) {
  return new $resource('/workouts/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
