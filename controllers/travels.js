const Travel = require('../models/travel');

function travelsIndex(req, res) {
  Travel.find((err, travels) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(travels);
  });
}

function travelsCreate(req, res) {
  Travel.create(req.body, (err, travel) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(travel);
  });
}

function travelsShow(req, res) {
  Travel.findById(req.params.id, (err, travel) => {
    if(err) return res.status(500).json({ error: err });
    if(!travel) return res.status(404).json({ error: 'Not found' });
    return res.json(travel);
  });
}

function travelsUpdate(req, res) {
  Travel.findById(req.params.id, (err, travel) => {
    if(err) return res.status(500).json({ error: err });
    if(!travel) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      travel[key] = req.body[key];
    }

    travel.save((err, travel) => {
      if(err) return res.status(400).json({ error: err });
      res.json(travel);
    });
  });
}

function travelsDelete(req, res) {
  Travel.findById(req.params.id, (err, travel) => {
    if(err) return res.status(500).json({ error: err });
    if(!travel) return res.status(404).json({ error: 'Not found' });

    travel.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: travelsIndex,
  create: travelsCreate,
  show: travelsShow,
  update: travelsUpdate,
  delete: travelsDelete
};
