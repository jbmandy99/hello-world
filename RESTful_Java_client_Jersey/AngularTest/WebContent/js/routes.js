//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ROUTES
proposalApp.config(function ($routeProvider ) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
//        templateUrl: 'pages/performanceSummary.htm',
//        controller: 'performanceSummaryController'
    })
    
    .when('/performanceSummary', {
        templateUrl: 'pages/performanceSummary.htm',
        controller: 'performanceSummaryController'
    })
    
    .when('/performanceSummary', {
        templateUrl: 'pages/performanceSummary.htm',
        controller: 'performanceSummaryWithContractNumberController'
//        	,
//        controllerAs: "ctrl"
    })
    
    
    .when('/performanceSummaryWithContractNumber/:param1', {
        templateUrl: 'pages/performanceSummary.htm',
        controller: 'performanceSummaryWithContractNumberController'
//        	,
//        controllerAs: "ctrl"
    })
    
    
    
     
    
    
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/tableHome', {
        templateUrl: 'pages/tableHome.htm',
        controller: 'tableHomeController'
    })
    
    .when('/tableFunds', {
        templateUrl: 'pages/tableFunds.htm',
        controller: 'tableFundsController'
    })
    
    .when('/tableSubFunds', {
        templateUrl: 'pages/tableSubFunds.htm',
        controller: 'tableSubFundsController'
    })
    
    .when('/tableBenchmarkList', {
        templateUrl: 'pages/tableBenchmarkList.htm',
        controller: 'tableBenchmarkListController'
    })    
    
    .when('/tableBenchmark/:id', {
        templateUrl: 'pages/tableBenchmark.htm',
        controller: 'tableBenchmarkController'
    })
   .when('/tableBenchmark', {
        templateUrl: 'pages/tableBenchmark.htm',
        controller: 'tableBenchmarkController'
    })
    
    .when('/tableFootnoteList', {
        templateUrl: 'pages/tableFootnoteList.htm',
        controller: 'tableFootnoteListController'
    })    
    
    .when('/tableFootnote/:id', {
        templateUrl: 'pages/tableFootnote.htm',
        controller: 'tableFootnoteController'
    })
    .when('/tableFootnote', {
        templateUrl: 'pages/tableFootnote.htm',
        controller: 'tableFootnoteController'
    })    

     .otherwise({ redirectTo: 'pages/home.htm' 
    });
   
 
});