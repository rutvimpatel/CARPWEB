//alert("Paula is poop")

// This intitializes the page that will allow for multipage 
var myApp = angular.module('myApp', ['ui.router'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
    // Each state routes to a different page
  .state('motivation', {
    url:'/motivation',
    templateUrl: 'templates/motivation.html',
    controller: 'motiveControl',
  })
  .state('whatIs', {
    url:'/whatIs',
    templateUrl: 'templates/whatIs.html',
    controller: 'whatIsControl',
  })
  .state('execution', {
    url:'/execution',
    templateUrl: 'templates/execution.html',
    controller: 'execControl',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutControl',
  })
})

// All of the following controllers take in $scope so that
// variables are visible in the html, and $http to request from 
// the json file

// controller for what is helpfulness page
.controller('whatIsControl', function($scope, $http){
  
})

// Controller for motivation page
.controller('motiveControl', function($scope, $http){
  
})

// Controller for execution page
.controller('execControl', function($scope, $http){
  
})

// Controller for about page
.controller('aboutControl', function($scope, $http){
  
})

