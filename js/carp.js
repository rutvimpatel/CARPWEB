//alert("Paula is poop")

// This intitializes the page that will allow for multipage 
var myApp = angular.module('myApp', ['ui.router'])


// Config route provider
.config(function($stateProvider) {
    $stateProvider
    // Each state routes to a different page
  .state('home', {
    url:'',
    templateUrl: 'templates/home.html',
    controller: 'homeControl',
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
// $state.go('home')
// All of the following controllers take in $scope so that
// variables are visible in the html, and $http to request from 
// the json file


// Controller for motivation page
.controller('homeControl', function($scope, $http){
  
})

// controller for what is helpfulness page
.controller('whatIsControl', function($scope, $http){
  
})


// Controller for execution page
.controller('execControl', function($scope, $http){
  
})

// Controller for about page
.controller('aboutControl', function($scope, $http){
  
})

