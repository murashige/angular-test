'use strict';

angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.name = "Tsukasa Murashige";
    $scope.onClickBtn = function () {
      $scope.name = $scope.name.split('').reverse().join('');
    };

    $scope.now = new Date();

    $scope.searchText = 'yamada';
    $scope.names = [
      'Kazuhito Hokamura',
      'Takeshi Takatsudo',
      'Akihiro Oyamada',
      'Kazuhori Tokuda',
      'Yukihisa Yamada'
    ];

    $scope.names2 = [
      'Kazuhito Hokamura',
      'Takeshi Takatsudo',
      'Akihiro Oyamada',
      'kazunori Tokuda',
      'Yukihisa Yamada'
    ];

    $scope.members = [
      { name: 'Kazuhito Hokamura', age: 30 },
      { name: 'Takeshi Takatsudo', age: 31 },
      { name: 'Akihiro Oyamada', age: 31 },
      { name: 'kazunori Tokuda', age: 30 },
      { name: 'Yukihisa Yamada', age: 28 }
    ];
  })
  .controller('EfoCtrl', function ($scope) {

  })
  .filter('reverse', function () {
    return function (input) {
      // 入力が文字列じゃなかったら空文字を返す
      if (typeof input !== 'string') {
        return '';
      }

      // 入力文字列を逆にして返す
      return input.split('').reverse().join('');
    };
  });
