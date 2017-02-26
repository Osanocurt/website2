const TrainFavourite = require('../models/trainFavourite');

function trainFavouritesIndex(req, res) {
  TrainFavourite.find((err, trainFavourites) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(trainFavourites);
  });
}

function trainFavouritesCreate(req, res) {
  TrainFavourite.create(req.body, (err, trainFavourite) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(trainFavourite);
  });
}

function trainFavouritesShow(req, res) {
  TrainFavourite.findById(req.params.id, (err, trainFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!trainFavourite) return res.status(404).json({ error: 'Not found' });
    return res.json(trainFavourite);
  });
}

function trainFavouritesUpdate(req, res) {
  TrainFavourite.findById(req.params.id, (err, trainFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!trainFavourite) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      eaFavourite[key] = req.body[key];
    }

    trainFavourite.save((err, trainFavourite) => {
      if(err) return res.status(400).json({ error: err });
      res.json(trainFavourite);
    });
  });
}

function trainFavouritesDelete(req, res) {
  TrainFavourite.findById(req.params.id, (err, trainFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!trainFavourite) return res.status(404).json({ error: 'Not found' });

    trainFavourite.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: trainFavouritesIndex,
  create: trainFavouritesCreate,
  show: trainFavouritesShow,
  update: trainFavouritesUpdate,
  delete: trainFavouritesDelete
};
