const Training = require('../models/training');

function trainingsIndex(req, res) {
  Training.find((err, trainings) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(trainings);
  });
}

function trainingsCreate(req, res) {
  Training.create(req.body, (err, training) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(training);
  });
}

function trainingsShow(req, res) {
  Training.findById(req.params.id, (err, training) => {
    if(err) return res.status(500).json({ error: err });
    if(!training) return res.status(404).json({ error: 'Not found' });
    return res.json(training);
  });
}

function trainingsUpdate(req, res) {
  Training.findById(req.params.id, (err, training) => {
    if(err) return res.status(500).json({ error: err });
    if(!training) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      training[key] = req.body[key];
    }

    training.save((err, training) => {
      if(err) return res.status(400).json({ error: err });
      res.json(training);
    });
  });
}

function trainingsDelete(req, res) {
  Training.findById(req.params.id, (err, training) => {
    if(err) return res.status(500).json({ error: err });
    if(!training) return res.status(404).json({ error: 'Not found' });

    training.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: trainingsIndex,
  create: trainingsCreate,
  show: trainingsShow,
  update: trainingsUpdate,
  delete: trainingsDelete
};
