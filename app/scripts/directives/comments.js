angular.module("app").component("comments",{
  templateUrl: "templates/comments.html",
  bindings: {
    person: "@"
  },
  controller: function($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/comments").success(function(data){
      $scope.comments = data
      console.log(data)
    })
  }
})

// return {
//   restrict: 'E', // E = elements, A = attributes, C = coments
//   templateUrl: "templates/comments.html",
//   scope: {},
//   link: function(scope, element, attrs){
// scope.person = attrs.person
// scope.comments = [
//   { text: "No entanto, não podemos esquecer que a estrutura atual da organização exige a precisão e a definição das condições inegavelmente apropriadas." },
//   { text: "Analisando o escopo do projeto e tendo em vista o aceite do cliente previamente estipulado" },
//   { text: "O empenho em analisar o início da atividade geral de formação de atitudes auxilia a preparação e a composição dos níveis de motivação departamental." }
// ]
//   }
// }
