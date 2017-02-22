const Recipe = require('../models/recipe');

function recipesIndex(req, res) {
  Recipe.find((err, recipes) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(recipes);
  });
}

function recipesCreate(req, res) {
  Recipe.create(req.body, (err, recipe) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(recipe);
  });
}

function recipesShow(req, res) {
  Recipe.findById(req.params.id, (err, recipe) => {
    if(err) return res.status(500).json({ error: err });
    if(!recipe) return res.status(404).json({ error: 'Not found' });
    return res.json(recipe);
  });
}

function recipesUpdate(req, res) {
  Recipe.findById(req.params.id, (err, recipe) => {
    if(err) return res.status(500).json({ error: err });
    if(!recipe) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      recipe[key] = req.body[key];
    }

    recipe.save((err, recipe) => {
      if(err) return res.status(400).json({ error: err });
      res.json(recipe);
    });
  });
}

function recipesDelete(req, res) {
  Recipe.findById(req.params.id, (err, recipe) => {
    if(err) return res.status(500).json({ error: err });
    if(!recipe) return res.status(404).json({ error: 'Not found' });

    recipe.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: recipesIndex,
  create: recipesCreate,
  show: recipesShow,
  update: recipesUpdate,
  delete: recipesDelete
};
