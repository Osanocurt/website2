angular.module('tallyApp')
  .controller('BlogsIndexController', BlogsIndexController)
  .controller('BlogsNewController', BlogsNewController)
  .controller('BlogsShowController', BlogsShowController)
  .controller('BlogsEditController', BlogsEditController);


BlogsIndexController.$inject = ['Blog'];
function BlogsIndexController(Blog) {
  const blogsIndex = this;

  blogsIndex.all = Blog.query();
}

BlogsNewController.$inject = ['Blog', '$state'];
function BlogsNewController(Blog, $state) {
  const blogsNew = this;

  blogsNew.blog = {};

  function create() {
    Blog.save(blogsNew.blog, () => {
      $state.go('blogsIndex');
    });
  }

  blogsNew.create = create;
}

BlogsShowController.$inject = ['Blog', '$state', '$auth'];
function BlogsShowController(Blog, $state, $auth) {
  const blogsShow = this;

  blogsShow.blog = Blog.get($state.params);

  function deleteBlog() {
    blogsShow.blog.$remove(() => {
      $state.go('blogsIndex');
    });
  }

  blogsShow.delete = deleteBlog;
  blogsShow.isLoggedIn = $auth.isAuthenticated;
}

BlogsEditController.$inject = ['Blog', '$state'];
function BlogsEditController(Blog, $state) {
  const blogsEdit = this;

  blogsEdit.blog = Blog.get($state.params);

  function update() {
    blogsEdit.blog.$update(() => {
      $state.go('blogsShow', $state.params);
    });
  }

  this.update = update;

}
