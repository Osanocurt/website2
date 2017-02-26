angular.module('tallyApp')
  .factory('HappyFavourite', HappyFavourite);

HappyFavourite.$inject = ['$resource'];
function HappyFavourite($resource) {
  return new $resource('/happyFavourites/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
