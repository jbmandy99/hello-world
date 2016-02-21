 

 
proposalApp.service('performanceSummaryService', ['$http','$location', function ($http,$location) {
 
 	var performanceSummaryAppServiceURI  = "http://localhost:8080/RESTfulExample/rest/metallica/";
	this.getPerformanceSummaryTO = function(internalProposalNumber) {
		return $http.post(performanceSummaryAppServiceURI + 'getPerformanceSummaryTO/' + internalProposalNumber );
	};
    
	this.getPerformanceDateList = function(performanceYear) {
		return $http.post(performanceSummaryAppServiceURI + 'getPerformanceDateList/' + performanceYear );
	};
	
	this.getWindowLocationHref = function( passedWindowLocationHref){
		 //window.location.href = getWindowLocationHref;
		this.href = passedWindowLocationHref;
	}
	
	this.getByteArray = function( internalProposalNumber){
	 	return $http.get("http://localhost:8080/RESTfulExample/rest/metallica/" + 'getJeffPdfDynamic'     , {responseType: 'arraybuffer'})
		 
	}
	
 }]);

 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// CUSTOM SERVICES
proposalApp.service('performanceSummaryServicesdasd',function(){
	alert('asdf');
	this.performanceSummaryTO = function (id) {
	    wrapList = [{value: 1, label: '0.00' }
	                            ,{ value: 2, label: '0.05' }
	                            ,{ value: 3, label: '0.10' }
	                            ,{ value: 4, label: '0.75' }
	                           ];
	    stateList = [{value: 'NE', label: 'NE' }
	                            ,{ value: 'NY', label: 'NY' }
	                           ];    
	    pricingPlatformList = [{value: 'P', label: 'Large Plan' }
	                            ,{ value: 'L', label: 'Legacy' }
	                                ,{ value: 'N', label: 'Neutral' }
	                           ];   
	    performanceYearList = [{value: 2015, label: '2015' }
	                            ,{ value: 2014, label: '2014' }
	                           ];    
	    
	    
	    performanceMonthDayList = function(performanceYear){
	        var year2015 = [{value: '01/01/2015', label: '01/01' }
	                            ,{ value: '02/01/2015', label: '02/01' }
	                           ];
	        var year2014 = [{value: '01/01/2014', label: '03/01' }
	                            ,{ value: '02/01/2014', label: '04/01' }
	                           ]; 
	        if ( performanceYear =="2015"){
	                return year2015;  
	        }else  if (  performanceYear =="2014"){
	                return year2014;
	        }
	    }
	}
 
    this.getExistingRequestTO = function(contractNumber){
        var myTO = new Object();
        myTO.contractNumber=contractNumber;      
        myTO.planName="asdf";
        myTO.dbPlan="No";
        myTO.wrap=1;
        myTO.dbPlan='No';
        myTO.domicileState='NY';
        myTO.pricingPlatform='N';
        myTO.planNumber=12345;
        return myTO;
    }
  
        
});



proposalApp.service('cityService',function(){
    this.city = "New York, NY"; 
});

proposalApp.service('tableHomeService',function(){
    this.tableNameList = [{value: 1, label: 'Table Funds' }
                            ,{ value: 2, label: 'Table Sub Funds' }
                            ,{ value: 3, label: 'Investment Footnote' }
                            ,{ value: 4, label: 'Performance Summary Footnote' }
                            ,{ value: 5, label: 'TableB Footnote' }
                            ,{ value: 6, label: 'Benchmark' }
                           ];
           
    
});


proposalApp.service('tableBenchmarkListService',function(){
         this.benchmarkList = [
            { id: 1, desc: 'benchmark desc 1' },
            { id: 2, desc: 'benchmark desc 2' },
            { id: 3, desc: 'benchmark desc 3' },
          ];
        
});



proposalApp.service('tableBenchmarkService',function(){
         this.benchmark =  
            { id: 1, desc: 'name 1' , begin: '01/01/2001', eff: '01/01/2002', term: '01/01/2003' };
        
});

proposalApp.service('tableFootnoteListService',function(){
         this.footnoteList = [
            { id: 1, desc: 'footnote desc 1' },
            { id: 2, desc: 'footnote desc 2' },
            { id: 3, desc: 'footnote desc 3' },
          ];
        
});

proposalApp.service('tableFootnoteService',function(){
         this.footnote =  
            { id: 1, desc: 'name 1'   };
        
});

proposalApp.service('tableSharedService',function(){
    this.investmentList = [{value: 1, label: 'Mutual Funds 1' }
                            ,{ value: 2, label: 'Mutual Funds 2' }
                            ,{ value: 3, label: 'Mutual Funds 3' }
                            ,{ value: 4, label: 'Mutual Funds 4' }
                           ];
        
});


