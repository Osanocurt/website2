const Favourite = require('../models/favourite');

function favouritesIndex(req, res) {
  Favourite.find((err, favourites) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(favourites);
  });
}

function favouritesCreate(req, res) {
  Favourite.create(req.body, (err, favourite) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(favourite);
  });
}

function favouritesShow(req, res) {
  Favourite.findById(req.params.id, (err, favourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!favourite) return res.status(404).json({ error: 'Not found' });
    return res.json(favourite);
  });
}

function favouritesUpdate(req, res) {
  Favourite.findById(req.params.id, (err, favourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!favourite) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      favourite[key] = req.body[key];
    }

    favourite.save((err, favourite) => {
      if(err) return res.status(400).json({ error: err });
      res.json(favourite);
    });
  });
}

function favouritesDelete(req, res) {
  Favourite.findById(req.params.id, (err, favourite) => {
    if(err) return res.status(500).json({ error: err });
    if(!favourite) return res.status(404).json({ error: 'Not found' });

    favourite.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: favouritesIndex,
  create: favouritesCreate,
  show: favouritesShow,
  update: favouritesUpdate,
  delete: favouritesDelete
};
