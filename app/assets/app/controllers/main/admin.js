'use strict';

angular.module('mainApp')
    .controller('AdminCtrl', function ($scope, $rootScope, $cookies, $location, djangoAuth, $mdDialog, $mdMedia)
    {
        $scope.content_template_url = '/static/app/templates/admin/dashboard.html';
        $scope.left_menu_template_url = '/static/app/templates/admin/left_menu.html';
        $scope.right_top_menu_template_url = '/static/app/templates/admin/right_top_header.html';
    });
