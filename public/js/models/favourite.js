angular.module('tallyApp')
  .factory('Favourite', Favourite);

Favourite.$inject = ['$resource'];
function Favourite($resource) {
  return new $resource('/favourites/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
