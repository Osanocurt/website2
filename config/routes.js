const router = require('express').Router();
const blogsController = require('../controllers/blogs');
const workoutsController = require('../controllers/workouts');
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

module.exports = router;
