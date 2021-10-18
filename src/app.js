'use strict';
(function () {

  var app = angular.module('app', ['ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        title: 'Gapstars | Assesment',
        templateUrl: "src/views/home.html",
        controller:"AssesmentController"
      })
  });


})();