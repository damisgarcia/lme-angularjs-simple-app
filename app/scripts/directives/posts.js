angular.module("app").directive("posts", function(){
  return {
    restrict: 'E', // E = elements, A = attributes, C = coments
    templateUrl: "templates/posts.html",
    scope: {},
    link: function(scope, element, attrs){
      scope.posts = [
        { title: "1 Lorem Ipsum", body: "No entanto, não podemos esquecer que a estrutura atual da organização exige a precisão e a definição das condições inegavelmente apropriadas." },
        { title: "2 Lorem Ipsum", body: "Analisando o escopo do projeto e tendo em vista o aceite do cliente previamente estipulado" },
        { title: "3 Lorem Ipsum", body: "O empenho em analisar o início da atividade geral de formação de atitudes auxilia a preparação e a composição dos níveis de motivação departamental." }
      ]
    }
  }
})
