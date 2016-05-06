'use strict';

angular.module('mainApp')
    .controller('UserProfileCtrl', function ($scope, $controller, djangoAuth, Validate) {
        $controller('AdminCtrl', {
            $scope: $scope
        });

        $scope.content_template_url = '/static/app/templates/admin/profile.html';

        $scope.model = {'first_name':'','last_name':'','email':''};
        $scope.complete = false;
        djangoAuth.profile().then(function(data){
            $scope.user_profile_data = data;
        });
        $scope.updateProfile = function(formData, model){
          $scope.errors = [];
          Validate.form_validation(formData,$scope.errors);
          if(!formData.$invalid){
            djangoAuth.updateProfile(model)
            .then(function(data){
                // success case
                $scope.complete = true;
                $scope.complete_message = 'You have updated your profile.';
                $scope.user_profile_data = data;
            },function(data){
                // error case
                $scope.error = data;
            });
          }
        }
    });
