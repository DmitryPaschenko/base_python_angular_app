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
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/app/templates/main.html',
                controller: 'MainCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/register', {
                templateUrl: '/static/app/templates/register.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/passwordReset', {
                templateUrl: '/static/app/templates/passwordreset.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/passwordResetConfirm/:firstToken/:passwordResetToken', {
                templateUrl: '/static/app/templates/passwordresetconfirm.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/login', {
                templateUrl: '/static/app/templates/login.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/verifyEmail/:emailVerificationToken', {
                templateUrl: '/static/app/templates/verifyemail.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/logout', {
                templateUrl: '/static/app/templates/logout.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/passwordChange', {
                templateUrl: '/static/app/templates/passwordchange.html',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/restricted', {
                templateUrl: '/static/app/templates/restricted.html',
                controller: 'RestrictedCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus();
                    }]
                }
            })
            .when('/authRequired', {
                templateUrl: '/static/app/templates/authrequired.html',
                controller: 'AuthrequiredCtrl',
                resolve: {
                    authenticated: ['djangoAuth', function (djangoAuth) {
                        return djangoAuth.authenticationStatus(true);
                    }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function (djangoAuth, $window) {
        djangoAuth.initialize('//' + $window.location.host + '/rest-auth', false);
    });
