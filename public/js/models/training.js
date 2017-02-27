angular.module('tallyApp')
  .factory('Training', Training);

Training.$inject = ['$resource'];
function Training($resource) {
  return new $resource('/trainings/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
