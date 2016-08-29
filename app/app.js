(function() {
  'use strict';
  var myApp = angular.module('myApp', []);

  myApp.controller('myAppController', ['$scope', '$window', function($scope, $window) {
    $scope.emails = [];

    $scope.addEmails = function() {
      var newEmail = (+new Date * Math.random()).toString(36) + "@example.com";
      $scope.emails.push(newEmail);
    };

    $scope.getEmailsCount = function() {
      $window.alert("Emails: " + $scope.emails.length);
    };
  }]);
})();
