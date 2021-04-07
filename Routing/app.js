var app=angular.module('MyApp', ["ngStorage", "ui.grid", 'ui.grid.edit', 'ui.grid.cellNav','ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "index.htm"
  })
  .when("/uiGridController", {
    templateUrl : "uiGridController.html",
    controller : "uiGridController.js"
  })
  .when("/highChartController", {
    templateUrl : "highChartController.html",
    controller : "highChartController.js"
  })
  .otherwise({
      template : "<h1>Nothing has been selected</h1>"
    });
});
