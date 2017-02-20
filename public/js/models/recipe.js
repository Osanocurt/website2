angular.module('tallyApp')
  .factory('Recipe', Recipe);

Recipe.$inject = ['$resource'];
function Recipe($resource) {
  return new $resource('/recipes/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
