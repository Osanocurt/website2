angular.module('tallyApp')
  .factory('TrainFavourite', TrainFavourite);

TrainFavourite.$inject = ['$resource'];
function TrainFavourite($resource) {
  return new $resource('/trainFavourites/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
