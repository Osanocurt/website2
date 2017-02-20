angular.module('tallyApp')
  .controller('RecipesIndexController', RecipesIndexController)
  .controller('RecipesNewController', RecipesNewController)
  .controller('RecipesShowController', RecipesShowController)
  .controller('RecipesEditController', RecipesEditController);


RecipesIndexController.$inject = ['Recipe'];
function RecipesIndexController(Recipe) {
  const recipesIndex = this;

  recipesIndex.all = Recipe.query();
}

RecipesNewController.$inject = ['Recipe', '$state'];
function RecipesNewController(Recipe, $state) {
  const recipesNew = this;

  recipesNew.recipe = {};

  function create() {
    Recipe.save(recipesNew.recipe, () => {
      $state.go('recipesIndex');
    });
  }

  recipesNew.create = create;
}

RecipesShowController.$inject = ['Recipe', '$state', '$auth'];
function RecipesShowController(Recipe, $state, $auth) {
  const recipesShow = this;

  recipesShow.recipe = Recipe.get($state.params);

  function deleteRecipe() {
    recipesShow.recipe.$remove(() => {
      $state.go('recipesIndex');
    });
  }

  recipesShow.delete = deleteRecipe;
  recipesShow.isLoggedIn = $auth.isAuthenticated;
}

RecipesEditController.$inject = ['Recipe', '$state'];
function RecipesEditController(Recipe, $state) {
  const recipesEdit = this;

  recipesEdit.recipe = Recipe.get($state.params);

  function update() {
    recipesEdit.recipe.$update(() => {
      $state.go('recipesShow', $state.params);
    });
  }

  this.update = update;

}
