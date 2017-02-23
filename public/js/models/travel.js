angular.module('tallyApp')
  .factory('Travel', Travel);

Travel.$inject = ['$resource'];
function Travel($resource) {
  return new $resource('/travels/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
