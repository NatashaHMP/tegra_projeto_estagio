angular.module('BlankApp').controller('mainControl', ['$scope', function($scope ) {
  $scope.mycar = true;
  $scope.total = 0;
  $scope.totalDesc = 0;
  $scope.itens = [];
  $scope.TrabalheNaTegra = false;
  $scope.books = [
    {
      nome: 'The Pragmatic Programmer: From Journeyman to Master',
      autor: 'Andrew Hunt & Dave Thomas',
      preco: 40,
      qtdeEst: 12,
      cover: 'img/the-pragmatic-programmer.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'The Mythical Man-Month: Essays on Software Engineering',
      autor: 'Frederick P. Brooks',
      preco: 80,
      qtdeEst: 1,
      cover: 'img/the-mythical-man-month.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Expressões Regulares - Uma Abordagem Divertida',
      autor: 'Aurelio Marinho Jargas',
      preco: 20,
      qtdeEst: 13,
      cover: 'img/expressoes-regulares.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Domain Driven Design: Tackling Complexity in the Heart of Software',
      autor: 'Eric Evans',
      preco: 120,
      qtdeEst: 42,
      cover: 'img/domain-driven-design.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Patterns of Enterprise Application Architecture',
      autor: 'Martin Fowler',
      preco: 32,
      qtdeEst: 42,
      cover: 'img/patterns-of-enterprise-application-architecture.jpg',
      qtde: 0,
      desconto: 0.9
    },
    {
      nome: 'Epigrams in Programming',
      autor: 'Alan Perils',
      preco: 31,
      qtdeEst: 0,
      cover: 'img/no-image.png',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Implementing Domain-Driven Design',
      autor: 'Vaughn Vernon',
      preco: 31,
      qtdeEst: 42,
      cover: 'img/implementing-domain-driven-design.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Dive Into HTML5',
      autor: 'Mark Pilgrim',
      preco: 22,
      qtdeEst: 42,
      cover: 'img/dive-into-html5.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Scalable Internet Architectures',
      autor: 'Theo Schlossnagle',
      preco: 18,
      qtdeEst: 4,
      cover: 'img/scalable-internet-architectures.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Refactoring: Improving the Design of Existing Code',
      autor: 'Martin Fowler',
      preco: 33,
      qtdeEst: 2,
      cover: 'img/refactoring.jpg',
      qtde: 0,
      desconto: 0.9
    },
    {
      nome: 'Treinamento Em C',
      autor: 'Victorine Viviane Mizrahi',
      preco: 42,
      qtdeEst: 6,
      cover: 'img/treinamento-em-c.jpg',
      qtde: 0,
      desconto: 1
    },
    {
      nome: 'Algoritmos: Teoria e Prática',
      autor: 'Thomas H. Cormen',
      preco: 4.60,
      qtdeEst: 1,
      cover: 'img/algoritmos.jpg',
      qtde: 0,
      desconto: 1
    },
  ];

  $scope.addItem = function(book) {
        $scope.itens.push({"nome": book.nome,
                           "autor": book.autor,
                           "preco": book.qtde * book.preco,
                           "qtde": book.qtde,
                           "obj": book,
                           "desconto": book.desconto,
                           "precDesc": book.desconto * (book.qtde * book.preco)});
        $scope.total = $scope.total + (book.preco * book.qtde);
        $scope.totalDesc = $scope.totalDesc + ((book.preco * book.qtde) * book.desconto);
        book.qtdeEst = book.qtdeEst - book.qtde;
        book.qtde = 0;
  }

  $scope.removeItem = function(item) {
    $scope.total = $scope.total - item.preco;
    item.obj.qtdeEst = item.obj.qtdeEst + item.qtde;
    $scope.totalDesc = $scope.totalDesc - (item.preco * item.desconto);
  }

  $scope.showcar = function() {
    if ($scope.mycar) {
      $scope.mycar = false;
    } else {
        $scope.mycar = true;
    }
  }
}]);
