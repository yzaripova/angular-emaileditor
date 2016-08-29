(function() {
  'use strict';
  angular.module('myApp')
    .directive('emailsEditor', function() {
      return {
        replace: false,
        templateUrl: 'app/directives/emails-editor/emails-editor.template.html',
        scope: {
          emails: '='
        },
        controller: function ($scope, $element, $attrs, $transclude) {
          $scope.pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

          $scope.click = function() {
            $('.emails-editor>input').focus();
          };

          $scope.keyPress = function(event) {
            if (event.keyCode  === 13 || event.keyCode === 44) {
              event.preventDefault();
              addEmailBlock($scope);
            }
          };

          $scope.keyDown = function(event) {
            if(event.ctrlKey && event.keyCode == 86){
              addEmailBlock($scope);
            }
          };

          $scope.blur = function(event) {
            addEmailBlock($scope);
          };

          $scope.removeEmails = function(emails, index) {
            emails.splice(index, 1);
          };

          $scope.isValid = function(email) {
            var isValid = $scope.pattern.test(email);
            if (!isValid) {
              return 'not-valid';
            }
          };          
        }
      }
    });

  function addEmailBlock($scope) {
    if ($scope.text && $scope.text.trim() !== '') {
      $scope.emails.push($scope.text);
    }

    $scope.text = '';
  }
})();