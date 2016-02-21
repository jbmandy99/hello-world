      
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                   
//CONTROLLERS  inject the service, resource, route/urlParams

 
proposalApp.controller('YourControllerHere1',['$scope', function($scope) {

	$scope.messagex = "Hello1";
	this.thisMessage="thisMessage";
	var varMessage="varMessage";
 }]);


proposalApp.controller('performanceSummaryWithContractNumberController',  
		['$scope', '$resource', '$routeParams', '$location', '$http', '$sce','performanceSummaryService', 
                                                                           function ($scope, $resource, $routeParams, $location, $http, $sce,performanceSummaryService ) {
	$scope.serviceUri = "http://localhost:8080/RESTfulExample/rest/metallica/";
	$scope.actionURL = 'https://' + window.location.host + '/gpa401kProposal/';
	$scope.contractNumber = $routeParams.param1;	
	$scope.internalProposalNumber = $routeParams.param1;	
	$scope.message1 = "Hello1";
	var varMessage = "Hello1";
	this.thisMessage="thisMessage";
	
	$scope.messagex = "Hello1";
	this.thisMessage="thisMessage";
	var varMessage="varMessage";
	$scope.messageLoadFail = 'Unable to load Performance Summary';
	
	$scope.loadForm = function() {
		$scope.performanceSummaryAppStatus='Loading';
		$scope.master ={};
 		 performanceSummaryService.getPerformanceSummaryTO($scope.internalProposalNumber)
 		 //below is hard to use for jasmine
//		.success(function(performanceSummaryTO) {
//			$scope.user = performanceSummaryTO;
//			if (performanceSummaryTO.contractNumber!=undefined ){
//				$scope.populateDropdown();
//			} 
//			$scope.master = angular.copy( $scope.user);
//			$scope.performanceSummaryAppStatus='';
//		})
//        .error(function (error) {
//        	$scope.performanceSummaryAppStatus = 'Unable to load Performance Summary';
//        });
 		 //http://stackoverflow.com/questions/23731637/test-a-controller-with-success-and-error
         .then(function (response) {
//        	 var error = JSON.stringify(response);
//        	 alert(error);
        	 if (response.status===200){
      			$scope.user = response.data;
      			if (response.data.contractNumber!='undefined' ){
     				$scope.populateDropdown();
     			}
    			$scope.master = angular.copy( $scope.user);
    			$scope.performanceSummaryAppStatus='';
        	 }else{
        		 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
        	 }
         }, function (response) {
        	 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
         });
 
	};
	
//	$scope.loadForm = function() {
//		$http.post(serviceUri + 'getPerformanceSummaryTO/' + $scope.contractNumber  ). 
//		success(function(performanceSummaryTO) {
//			$scope.user = performanceSummaryTO;
//			$scope.master = angular.copy( $scope.user);
//			if ($scope.planName===undefined && $scope.contractNumber != undefined){
//				$scope.populateDropdown();
//			}
//		})
//		.error(function(performanceSummaryTO) {
//			alert('failed');
//		});
//	};
	
	$scope.resetForm = function() {
		$scope.user = angular.copy($scope.master);
		$scope.populateDropdown();
	};

	$scope.populateDropdown = function(){
		$scope.user.domicileState = setFromDropdown($scope.user.stateList,$scope.user.domicileState);
		$scope.user.pricingPlatform = setFromDropdown($scope.user.pricingPlatformList,$scope.user.pricingPlatform);
		$scope.user.wrap = setFromDropdownByLabel($scope.user.wrapList,$scope.user.wrap);
		$scope.user.performanceYear = setFromDropdown($scope.user.performanceYearList,$scope.user.performanceYear);
		$scope.user.performanceDate = setFromDropdown($scope.user.performanceMonthDayList,$scope.user.performanceDate);
	};	
	
	$scope.windowLocationHref='';
	$scope.performanceSummaryGeneratePdf = function () {
		this.windowLocationHref='';
		$scope.performanceSummaryAppStatus='';
		$scope.validationDefault =  $scope.user.wrap.label !== 'undefined'  && $scope.user.domicileState.value !== 'undefined'
			&& $scope.user.pricingPlatform.value !== 'undefined';
		$scope.validationWithContractNumber =   $scope.validationDefault && $scope.user.contractNumber !== 'undefined'
			&& $scope.user.performanceYear.value !== 'undefined';
		if ($scope.user.contractNumber === 'undefined'
			&& $scope.validationDefault) {
			 
			$scope.windowLocationHref="https://github.com/RyanV/jasmine-fake-window";
		}else if ($scope.user.contractNumber !== 'undefined' && $scope.validationWithContractNumber) {
			$scope.windowLocationHref="https://github.com/RyanV/jasmine-fake-window";
		}else{
			$scope.performanceSummaryAppStatus = 'Failed to generate document';	
		}
		
		if ($scope.windowLocationHref!==''){
	 
			performanceSummaryService.getByteArray( $scope.internalProposalNumber)
  	         .then(function (response) {
  	        	var a = JSON.stringify(response);
	        	 if (response.status===200){
  	    			$scope.performanceSummaryAppStatus='';
	                var file = new Blob([response.data], {type: 'application/pdf'});
	                var fileURL = URL.createObjectURL(file);
		            var a = document.createElement("a");
		            document.body.appendChild(a);
		            a.style = "display: none";	                
	                a.href = $sce.trustAsResourceUrl(fileURL);
	                a.download = "test.pdf";
	                a.click();
  	    			 
 	    			
	        	 }else{
	        		 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
	        	 }
	         }, function (response) {
	        	 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
	         });


//            $http.get($scope.serviceUri + 'getJeffPdfDynamic'     , {responseType: 'arraybuffer'})
//			  .success(function (result) {
//	                var file = new Blob([result], {type: 'application/pdf'});
//	                var fileURL = URL.createObjectURL(file);
//	                
//	                /***this one downloads it to the scree 
//	                 * <my-download id="content" get-data="getBlob()" />
//	                 * **/
////	                $scope.content = $sce.trustAsResourceUrl(fileURL);
////	                a.href = $scope.content;
////	                a.download = fileName;
////	                a.click();
//	                /** this one opens a new screen */
////	                window.location.href = $scope.content;
//	                /** this one saves it in a new file*/
//		            var a = document.createElement("a");
//		            document.body.appendChild(a);
//		            a.style = "display: none";	                
//	                a.href = $sce.trustAsResourceUrl(fileURL);
//	                a.download = "test.pdf";
//	                a.click();
//			})		
//	            
//			.error(function(response) {
//				alert('failed');
//			});
		}
		
	};	
	
	 
	            
//	            this works
//	            $http.get($scope.serviceUri + 'getJeffPdf'     , {responseType: 'arraybuffer'})
//				  .success(function (result) {
//		                var file = new Blob([result], {type: 'application/pdf'});
//		                var fileURL = URL.createObjectURL(file);
//		                $scope.content = $sce.trustAsResourceUrl(fileURL);
//		                a.href = $scope.content;
//		                a.download = fileName;
//		                a.click();
//				})		
//		            
//				.error(function(response) {
//					alert('failed');
//				});
//	            
	            
	            
	            
	            
	            
			
	 
	 
	$scope.changePerformanceYear = function() {
//		$http.post($scope.serviceUri + "getPerformanceDateList/" +$scope.user.performanceYear.value)
//		.success(function(performanceSummaryTO) {
//			$scope.user.performanceMonthDayList = performanceSummaryTO.performanceMonthDayList;
//			$scope.user.performanceDate = setFromDropdown($scope.user.performanceMonthDayList,performanceSummaryTO.performanceDate);
//		})
//		.error(function(performanceSummaryTO) {
//			alert('failed');
//		});
		performanceSummaryService.getPerformanceDateList($scope.user.performanceYear.value)
        .then(function (response) {
       	 if (response.status===200){
	 			$scope.user.performanceMonthDayList = response.data.performanceMonthDayList;
	 			//$scope.user.performanceDate = setFromDropdown($scope.user.performanceMonthDayList,response.data.performanceDate);
       	 }else{
       		 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
       	 }
        }, function (response) {
       	 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
        });
	};  

	//keep together  
 

	$scope.reset = function(form) {
		if (form) {
			form.$setPristine();
			form.$setUntouched();
		}
 		$scope.resetForm();
	};

	$scope.loadForm();
	
	//keep together 
	
	
	
	
	$scope.saveAsPDF = function() {
	    var form = document.createElement("form");
	    form.setAttribute("action",  serviceUri + 'getJeffByte' );
	    form.setAttribute("method", "get");
	    form.setAttribute("target", "_blank");

	    var hiddenEle1 = document.createElement("input");
	    hiddenEle1.setAttribute("type", "hidden");
	    hiddenEle1.setAttribute("name", "some");
	    hiddenEle1.setAttribute("value", value);

	    form.append(hiddenEle1 );

	    form.submit();

	}
	
	
	
	
	 
	$scope.passObject = function() {
		//http://jsfiddle.net/bkUEu/458/
  		var input = // "{\"singer\":\"Metallica\",\"title\":\"Fade To Black\"}";
  		{ singer : "Metallica", title: "Fade To Black"};
 
  		var inputx = 
  			{json:   JSON.stringify(input)
  			};
 
  		$http.post("http://localhost:8080/RESTfulExample/rest/metallica/postJson",input)
//		$http.get("http://localhost:8080/RESTfulExample/rest/metallica/get")
           .then(function (response) {
        	 var error = JSON.stringify(response);
        	 alert(error);
        	 if (response.status===201){
      			$scope.user = response.data;
       			$scope.performanceSummaryAppStatus='';
        	 }else{
        		 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
        	 }
         }, function (response) {
        	 $scope.performanceSummaryAppStatus = $scope.messageLoadFail;
         });
 
	};
 	
		
 
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}]);

 

function setFromDropdown(list,selectedItem){
//	  for (var i=0; i <  list.length; i++){
//	    	 if (list[i].value === selectedItem){
//	    		 selectedItem = list[i];
//	    		 break;
//	    	 }
//	  }
//	  return selectedItem;
	var foundItem = _.find(list, function(item){
		return item.value === selectedItem;
		
	});
	return foundItem ? foundItem :selectedItem;
}

function setFromDropdownByLabel(list,selectedItem){
//	  for (var i=0; i <  list.length; i++){
//	    	 if (list[i].label === selectedItem){
//	    		 selectedItem = list[i];
//	    		 break;
//	    	 }
//	  }
//	  return selectedItem;
	var foundItem = _.find(list, function(item){
		return item.label === selectedItem;
		
	});
	return foundItem ? foundItem :selectedItem;
} 






































































//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                   
//CONTROLLERS  inject the service, resource, route/urlParams
proposalApp.controller('performanceSummaryController',  ['$scope', '$resource', '$routeParams', '$location', '$http',  'performanceSummaryService',
    function ($scope, $resource, $routeParams, $location, $http, performanceSummaryService) {
	
		$scope.loadForm = function() {
		  var serviceUri = "http://localhost:8080/RESTfulExample/rest/metallica/";
	 	  $http.post(serviceUri + 'getPerformanceSummaryTO/' + $scope.contractNumber  ). 
		  success(function(performanceSummaryTO) {
			  $scope.user = performanceSummaryTO;
		  })
		  .error(function(performanceSummaryTO) {

		      alert('failed');
		  });
		};
		
		
     $scope.performanceSummaryGenerate = function (user) {
         var validationWithoutContractNumber =   $scope.user.domicileState !== undefined && $scope.user.pricingPlatform !== undefined;
         if (validationWithoutContractNumber) {
             alert("this will call the generate pdf without contract");
         }
     };
     
	    $scope.master = {};
		
	    $scope.update = function( user ) {
	      $scope.master = angular.copy(user);
	    };
	
	    $scope.reset = function(form) {
	      if (form) {
	        form.$setPristine();
	        form.$setUntouched();
	      }
	      $scope.user = angular.copy($scope.master);
	      $scope.loadForm();
	    };
	
	    $scope.reset();
	    $scope.loadForm();
   
 }]);
 
