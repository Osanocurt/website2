const HappyFavourite = require('../models/happyFavourite');

function happyFavouritesIndex(req, res) {
  HappyFavourite.find((err, happyFavourites) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(happyFavourites);
  });
}

function happyFavouritesCreate(req, res) {
  HappyFavourite.create(req.body, (err, happyFavourite) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(happyFavourite);
  });
}

function happyFavouritesShow(req, res) {
  HappyFavourite.findById(req.params.id, (err, happyFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!happyFavourite) return res.status(404).json({ error: 'Not found' });
    return res.json(happyFavourite);
  });
}

function happyFavouritesUpdate(req, res) {
  HappyFavourite.findById(req.params.id, (err, happyFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!happyFavourite) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      happyFavourite[key] = req.body[key];
    }

    happyFavourite.save((err, happyFavourite) => {
      if(err) return res.status(400).json({ error: err });
      res.json(happyFavourite);
    });
  });
}

function happyFavouritesDelete(req, res) {
  HappyFavourite.findById(req.params.id, (err, happyFavourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!happyFavourite) return res.status(404).json({ error: 'Not found' });

    happyFavourite.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: happyFavouritesIndex,
  create: happyFavouritesCreate,
  show: happyFavouritesShow,
  update: happyFavouritesUpdate,
  delete: happyFavouritesDelete
};
