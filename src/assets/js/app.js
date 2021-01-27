import angular from '../../../angular.json';
let app = angular.module("app-root", ["ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./app/app.component.html" 
        } )
        .when("/list", {
            templateUrl: "./app/views/product/creat/creat.component.html" 
        } )
        .when("/report", {
            templateUrl: "./app/views/product/creat/report.component.html" 
        } )
});
  