angular.module("app").directive("posts", function($http){
  return {
    restrict: 'E', // E = elements, A = attributes, C = coments
    templateUrl: "templates/posts.html",
    scope: {},
    link: function(scope, element, attrs){
      $http.get("https://jsonplaceholder.typicode.com/posts").success(function(data){
        scope.posts = data
        scope.page = 0
        scope.perPage = 25
      })
    }
  }
})
