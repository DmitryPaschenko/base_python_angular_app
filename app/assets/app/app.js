'use strict';

angular.module('mainApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngMaterial',
        'ngMessages',
        'material.svgAssetsCache'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/app/templates/main/main_layout.html',
                controller: 'MainCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/admin', {
                templateUrl: '/static/app/templates/main/admin_layout.html',
                controller: 'AdminCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/admin/user/profile', {
                templateUrl: '/static/app/templates/main/admin_layout.html',
                controller: 'UserProfileCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/register', {
                templateUrl: '/static/app/templates/main/register.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/passwordReset', {
                templateUrl: '/static/app/templates/main/passwordreset.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/passwordResetConfirm/:firstToken/:passwordResetToken', {
                templateUrl: '/static/app/templates/main/passwordresetconfirm.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/login', {
                templateUrl: '/static/app/templates/main/login.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/verifyEmail/:emailVerificationToken', {
                templateUrl: '/static/app/templates/main/verifyemail.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/logout', {
                templateUrl: '/static/app/templates/main/logout.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/passwordChange', {
                templateUrl: '/static/app/templates/main/passwordchange.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/restricted', {
                templateUrl: '/static/app/templates/main/restricted.html',
                controller: 'RestrictedCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/authRequired', {
                templateUrl: '/static/app/templates/main/authrequired.html',
                controller: 'AuthrequiredCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus(true);
                    }]
                }
            })
//            .when('/user/profile', {
//                templateUrl: '/static/app/templates/user/index.html',
//                controller: 'UserprofileCtrl',
//                resolve: {
//                    authenticated: ['djangoAuth', function (djangoAuth) {
//                        return djangoAuth.authenticationStatus(true);
//                    }]
//                }
//            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
    })
    .run(function (djangoAuth, $window) {
        var BASE_API_URL = '/api/v1/';
        djangoAuth.initialize('//' + $window.location.host + BASE_API_URL + 'rest-auth', false);
    });
