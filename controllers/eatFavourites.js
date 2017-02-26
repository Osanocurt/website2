const EatFavourite = require('../models/eatFavourite');

function eatFavouritesIndex(req, res) {
  EatFavourite.find((err, eatFavourites) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(eatFavourites);
  });
}

function eatFavouritesCreate(req, res) {
  EatFavourite.create(req.body, (err, eatFavourite) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(eatFavourite);
  });
}

function eatFavouritesShow(req, res) {
  EatFavourite.findById(req.params.id, (err, eatFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!eatFavourite) return res.status(404).json({ error: 'Not found' });
    return res.json(eatFavourite);
  });
}

function eatFavouritesUpdate(req, res) {
  EatFavourite.findById(req.params.id, (err, eatFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!eatFavourite) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      eaFavourite[key] = req.body[key];
    }

    eatFavourite.save((err, eatFavourite) => {
      if(err) return res.status(400).json({ error: err });
      res.json(eatFavourite);
    });
  });
}

function eatFavouritesDelete(req, res) {
  EatFavourite.findById(req.params.id, (err, eatFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!eatFavourite) return res.status(404).json({ error: 'Not found' });

    eatFavourite.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: eatFavouritesIndex,
  create: eatFavouritesCreate,
  show: eatFavouritesShow,
  update: eatFavouritesUpdate,
  delete: eatFavouritesDelete
};
