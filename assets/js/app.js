'use strict';
/* App Controllers */


var memoryAlphabetApp = angular.module('memoryAlphabetApp', ['ngAnimate', 'ui.router']);

memoryAlphabetApp.config(function($stateProvider, $urlRouterProvider) {
    
$urlRouterProvider.when("", "/swarTab");
 
    $stateProvider
        $stateProvider
           
        .state('swarMain', {
            url: '/swarTab',
            templateUrl: 'swarTab.html'
            
        })
        
        .state('swarMain.swar1', {
            url: '/swar1',
            templateUrl: 'partials/swar/swar1.html',
              controller: 'VarnamalaCtrl'
        })


        .state('swarMain.swar2', {
            url: '/swar2',
            templateUrl: 'partials/swar/swar2.html',
              controller: 'VarnamalaCtrl'
        })
          .state('swarMain.swar3', {
            url: '/swar3',
            templateUrl: 'partials/swar/swar3.html',
              controller: 'VarnamalaCtrl'
        })
      
          
        .state('vyanjanMain', {
            url: "/vyanjanTab",
            templateUrl: "vyanjantab.html"
        })

         .state('vyanjanMain.vyanjan', {
            url: '/vyanjan',
            templateUrl: 'partials/vyanjan/vyanjan.html',
              controller: 'VarnamalaCtrl'
        })
       
    // catch all route
    
    //$urlRouterProvider.otherwise('/swarTab/swar1');
    
})
 
