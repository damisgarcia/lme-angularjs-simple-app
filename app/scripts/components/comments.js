angular.module("app").component("comments",{
  templateUrl: "templates/comments.html",
  bindings: {
    postId: "="
  },
  controller: function($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/comments?postId=" + $scope.$ctrl.postId ).success(function(data){
      $scope.comments = data
    })
  }
})
