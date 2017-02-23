const router = require('express').Router();
const blogsController = require('../controllers/blogs');
const workoutsController = require('../controllers/workouts');
const recipesController = require('../controllers/recipes');
const travelsController = require('../controllers/travels');
const authController = require('../controllers/auth');
const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');

router
  .post('/login', authController.login)
  .post('/register', authController.register)

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
