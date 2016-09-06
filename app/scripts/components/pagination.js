angular.module("app").filter("pagination", function($filter){
  return function(data, object){
    if(data){
      if(!angular.isNumber(object.page)){
        throw "Pagination Filter: page is not defined"
      }

      if(!angular.isNumber(object.perPage)){
        throw "Pagination Filter: perPage is not defined"
      }

      var slice = object.perPage * object.page
      var result = data.slice(slice, data.length)
      return $filter('limitTo')(result, object.perPage)
    }
    return []
  }
})


angular.module("app").component("paginationControl",{
  template: "<ul class='pagination pagination-sm'><li ng-repeat='i in paginate() track by $index'> <a ng-click='goTo($index)'>{{ $index + 1 }}</a></li></ul>",
  bindings: {
    page: "=",
    perPage: "=",
    ngModel: "="
  },
  controller: function($scope){
    $scope.goTo = function(index){
      $scope.$ctrl.page = index
    }

    $scope.paginate = function(){
      if($scope.$ctrl.ngModel){
        if(!angular.isNumber($scope.$ctrl.page)){
          throw "Pagination Controls: page bindings is not defined"
        }

        if(!angular.isNumber($scope.$ctrl.perPage)){
          throw "Pagination Filter: perPage is not defined"
        }

        $scope.total_pagination = $scope.$ctrl.ngModel.length / $scope.$ctrl.perPage
        return new Array($scope.total_pagination)
      }
      return []
    }
  }
})
