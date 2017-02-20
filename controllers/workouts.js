const Workout = require('../models/workout');

function workoutsIndex(req, res) {
  Workout.find((err, workouts) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(workouts);
  });
}

function workoutsCreate(req, res) {
  Workout.create(req.body, (err, workout) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(workouts);
  });
}

function workoutsShow(req, res) {
  Workout.findById(req.params.id, (err, workout) => {
    if(err) return res.status(500).json({ error: err });
    if(!workout) return res.status(404).json({ error: 'Not found' });
    return res.json(workouts);
  });
}

function workoutsUpdate(req, res) {
  Workout.findById(req.params.id, (err, workout) => {
    if(err) return res.status(500).json({ error: err });
    if(!workout) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      workout[key] = req.body[key];
    }

    workout.save((err, workout) => {
      if(err) return res.status(400).json({ error: err });
      res.json(workouts);
    });
  });
}

function workoutsDelete(req, res) {
  Workout.findById(req.params.id, (err, workout) => {
    if(err) return res.status(500).json({ error: err });
    if(!workout) return res.status(404).json({ error: 'Not found' });

    workout.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: workoutsIndex,
  create: workoutsCreate,
  show: workoutsShow,
  update: workoutsUpdate,
  delete: workoutsDelete
};
