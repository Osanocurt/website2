const router = require('express').Router();
const blogsController = require('../controllers/blogs');
const workoutsController = require('../controllers/workouts');
const recipesController = require('../controllers/recipes');
const travelsController = require('../controllers/travels');
const eatFavouritesController = require('../controllers/eatFavourites');
const trainFavouritesController = require('../controllers/trainFavourites');
const happyFavouritesController = require('../controllers/happyFavourites');
const authController = require('../controllers/auth');
const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');

router
  .post('/login', authController.login)
  .post('/register', authController.register)

router.route('/eatFavourites')
  .get(eatFavouritesController.index)
  .post(secureRoute, eatFavouritesController.create);

router.route('/eatFavourites/:id')
  .get(eatFavouritesController.show)
  .put(secureRoute, eatFavouritesController.update)
  .delete(secureRoute, eatFavouritesController.delete);

router.route('/trainFavourites')
  .get(trainFavouritesController.index)
  .post(secureRoute, trainFavouritesController.create);

router.route('/trainFavourites/:id')
  .get(trainFavouritesController.show)
  .put(secureRoute, trainFavouritesController.update)
  .delete(secureRoute, trainFavouritesController.delete);

  router.route('/happyFavourites')
    .get(happyFavouritesController.index)
    .post(secureRoute, happyFavouritesController.create);

  router.route('/happyFavourites/:id')
    .get(happyFavouritesController.show)
    .put(secureRoute, happyFavouritesController.update)
    .delete(secureRoute, happyFavouritesController.delete);

router.route('/blogs')
  .get(blogsController.index)
  .post(secureRoute, blogsController.create);

router.route('/blogs/:id')
  .get(blogsController.show)
  .put(secureRoute, blogsController.update)
  .delete(secureRoute, blogsController.delete);

  router.route('/workouts')
    .get(workoutsController.index)
    .post(secureRoute, workoutsController.create);

  router.route('/workouts/:id')
    .get(workoutsController.show)
    .put(secureRoute, workoutsController.update)
    .delete(secureRoute, workoutsController.delete);

  router.route('/recipes')
    .get(recipesController.index)
    .post(secureRoute, recipesController.create);

  router.route('/recipes/:id')
    .get(recipesController.show)
    .put(secureRoute, recipesController.update)
    .delete(secureRoute, recipesController.delete);

  router.route('/travels')
    .get(travelsController.index)
    .post(secureRoute, travelsController.create);

  router.route('/travels/:id')
    .get(travelsController.show)
    .put(secureRoute, travelsController.update)
    .delete(secureRoute, travelsController.delete);

module.exports = router;
