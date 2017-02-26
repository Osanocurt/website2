const PersonalTraining = require('../models/personalTraining');

function personalTrainingsIndex(req, res) {
  PersonalTraining.find((err, personalTrainings) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(personalTrainings);
  });
}

function personalTrainingsCreate(req, res) {
  PersonalTraining.create(req.body, (err, personalTraining) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(personalTraining);
  });
}

function personalTrainingsShow(req, res) {
  PersonalTraining.findById(req.params.id, (err, personalTraining) => {
    if(err) return res.status(500).json({ error: err });
    if(!personalTraining) return res.status(404).json({ error: 'Not found' });
    return res.json(personalTraining);
  });
}

function personalTrainingsUpdate(req, res) {
  PersonalTraining.findById(req.params.id, (err, personalTraining) => {
    if(err) return res.status(500).json({ error: err });
    if(!personalTraining) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      personalTraining[key] = req.body[key];
    }

    personalTraining.save((err, personalTraining) => {
      if(err) return res.status(400).json({ error: err });
      res.json(personalTraining);
    });
  });
}

function personalTrainingsDelete(req, res) {
  PersonalTraining.findById(req.params.id, (err, personalTraining) => {
    if(err) return res.status(500).json({ error: err });
    if(!personalTraining) return res.status(404).json({ error: 'Not found' });

    personalTraining.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: personalTrainingsIndex,
  create: personalTrainingsCreate,
  show: personalTrainingsShow,
  update: personalTrainingsUpdate,
  delete: personalTrainingsDelete
};
