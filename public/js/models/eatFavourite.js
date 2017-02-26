angular.module('tallyApp')
  .factory('EatFavourite', EatFavourite);

EatFavourite.$inject = ['$resource'];
function EatFavourite($resource) {
  return new $resource('/eatFavourites/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
