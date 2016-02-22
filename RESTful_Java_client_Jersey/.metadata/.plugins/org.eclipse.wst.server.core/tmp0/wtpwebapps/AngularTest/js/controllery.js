      
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
			
			var ctrl = this;
			ctrl.serviceUri = "http://localhost:8080/RESTfulExample/rest/metallica/";
			ctrl.actionURL = 'https://' + window.location.host + '/gpa401kProposal/';
			ctrl.contractNumber = $routeParams.param1;	
			ctrl.internalProposalNumber = $routeParams.param1;	
			ctrl.message1 = "Hello1";
			var varMessage = "Hello1";
			this.thisMessage="thisMessage";
			
			ctrl.messagex = "Hello1";
			this.thisMessage="thisMessage";
			var varMessage="varMessage";
			ctrl.messageLoadFail = 'Unable to load Performance Summary';
			
			ctrl.loadForm = function() {
				ctrl.performanceSummaryAppStatus='Loading';
				ctrl.master ={};
		 		 performanceSummaryService.getPerformanceSummaryTO(ctrl.internalProposalNumber)
		 		 //below is hard to use for jasmine
//				.success(function(performanceSummaryTO) {
//					ctrl.user = performanceSummaryTO;
//					if (performanceSummaryTO.contractNumber!=undefined ){
//						ctrl.populateDropdown();
//					} 
//					ctrl.master = angular.copy( ctrl.user);
//					ctrl.performanceSummaryAppStatus='';
//				})
//		        .error(function (error) {
//		        	ctrl.performanceSummaryAppStatus = 'Unable to load Performance Summary';
//		        });
		 		 //http://stackoverflow.com/questions/23731637/test-a-controller-with-success-and-error
		         .then(function (response) {
//		        	 var error = JSON.stringify(response);
//		        	 alert(error);
		        	 if (response.status===200){
		      			ctrl.user = response.data;
		      			if (response.data.contractNumber!=undefined ){
		     				ctrl.populateDropdown();
		     			}
		    			ctrl.master = angular.copy( ctrl.user);
		    			ctrl.performanceSummaryAppStatus='';
		        	 }else{
		        		 ctrl.performanceSummaryAppStatus = ctrl.messageLoadFail;
		        	 }
		         }, function (response) {
		        	 ctrl.performanceSummaryAppStatus = ctrl.messageLoadFail;
		         });
		 
			};
			
 			ctrl.resetForm = function() {
				ctrl.user = angular.copy(ctrl.master);
				ctrl.populateDropdown();
			};

			ctrl.populateDropdown = function(){
				ctrl.user.domicileState = setFromDropdown(ctrl.user.stateList,ctrl.user.domicileState);
				ctrl.user.pricingPlatform = setFromDropdown(ctrl.user.pricingPlatformList,ctrl.user.pricingPlatform);
				ctrl.user.wrap = setFromDropdownByLabel(ctrl.user.wrapList,ctrl.user.wrap);
				ctrl.user.performanceYear = setFromDropdown(ctrl.user.performanceYearList,ctrl.user.performanceYear);
				ctrl.user.performanceDate = setFromDropdown(ctrl.user.performanceMonthDayList,ctrl.user.performanceDate);
			};	
			
			this.windowLocationHref='';
			ctrl.performanceSummaryGeneratePdf = function () {
				this.windowLocationHref='';
				ctrl.performanceSummaryAppStatus='';
				ctrl.validationDefault =  ctrl.user.wrap.label !== undefined  && ctrl.user.domicileState.value !== undefined
					&& ctrl.user.pricingPlatform.value !== undefined;
				ctrl.validationWithContractNumber =   ctrl.validationDefault && ctrl.user.contractNumber !== undefined
					&& ctrl.user.performanceYear.value !== undefined;
				if (ctrl.user.contractNumber === undefined
					&& ctrl.validationDefault) {
					 //performanceSummaryService.getWindowLocationHref(   );
					 this.windowLocationHref="https://github.com/RyanV/jasmine-fake-window";
				}else if (ctrl.user.contractNumber !== undefined && ctrl.validationWithContractNumber) {
					this.windowLocationHref "https://github.com/RyanV/jasmine-fake-window"  ;
				}else{
					ctrl.performanceSummaryAppStatus = 'Failed to generate document';	
				}
				
				if (this.windowLocationHref!==''){
					//performanceSummaryService.getWindowLocationHref(this.windowLocationHref);
					console.log('print');
				}
				
			};	
			
			

			//http://stackoverflow.com/questions/21628378/angularjs-display-blob-pdf-in-an-angular-app
			ctrl.performanceSummaryGeneratePdfxxxx = function (user) {
				var validationWithoutContractNumber =   ctrl.user.domicileState !== undefined && ctrl.user.pricingPlatform !== undefined;
				if (validationWithoutContractNumber) {
			           var fileName = "test.pdf";
			            var a = document.createElement("a");
			            document.body.appendChild(a);
			            a.style = "display: none";
		 
			            //$http.get(serviceUri + 'getPdfDocument/1974'     , {responseType: 'arraybuffer'})
			            $http.get(ctrl.serviceUri + 'getJeffByte'   , {responseType: 'arraybuffer'})
//					  .success(function (result) {
////			                var file = new Blob([result], {type: 'application/pdf'});
//						  var file = new Blob([result]);
//			                var fileURL = URL.createObjectURL(file);
////			                ctrl.content = $sce.trustAsResourceUrl(fileURL);
////			                a.href = ctrl.content;
////			                a.download = fileName;
////			                a.click();
//			                alert('asdf');
//						    window.open(fileURL);
//						    //window.location.href = fileURL;
			                
			                
			                .success(function (result) {
				                var file = new Blob([result], {type: 'application/pdf'});
				                var fileURL = URL.createObjectURL(file);
				                ctrl.content = fileURL; // $sce.trustAsResourceUrl(fileURL);
//				                a.href = fileURL;
//				                a.download = fileName;
//				                a.click();
//				                window.open(fileURL);
				              window.location.href = fileURL;
			                 
					})		
			            
//			            $http
//			            .get(serviceUri + 'printPDF/')
//			            .success(function(data){
//			                //data is link to pdf
//			                $window.open(data);
//			            })
			            
					.error(function(response) {
						alert('failed');
					});
					
					
					
			            
			            
			            
			            
			            
			            
			            
//			            this works
//			            $http.get(ctrl.serviceUri + 'getJeffPdf'     , {responseType: 'arraybuffer'})
//						  .success(function (result) {
//				                var file = new Blob([result], {type: 'application/pdf'});
//				                var fileURL = URL.createObjectURL(file);
//				                ctrl.content = $sce.trustAsResourceUrl(fileURL);
//				                a.href = ctrl.content;
//				                a.download = fileName;
//				                a.click();
//						})		
//				            
//						.error(function(response) {
//							alert('failed');
//						});
//			            
			            
			            
			            
			            
			            
					
				}
			};	

			 
			ctrl.changePerformanceYear = function() {
//				$http.post(ctrl.serviceUri + "getPerformanceDateList/" +ctrl.user.performanceYear.value)
//				.success(function(performanceSummaryTO) {
//					ctrl.user.performanceMonthDayList = performanceSummaryTO.performanceMonthDayList;
//					ctrl.user.performanceDate = setFromDropdown(ctrl.user.performanceMonthDayList,performanceSummaryTO.performanceDate);
//				})
//				.error(function(performanceSummaryTO) {
//					alert('failed');
//				});
				performanceSummaryService.getPerformanceDateList(ctrl.user.performanceYear.value)
		        .then(function (response) {
		       	 if (response.status===200){
			 			ctrl.user.performanceMonthDayList = response.data.performanceMonthDayList;
			 			//ctrl.user.performanceDate = setFromDropdown(ctrl.user.performanceMonthDayList,response.data.performanceDate);
		       	 }else{
		       		 ctrl.performanceSummaryAppStatus = ctrl.messageLoadFail;
		       	 }
		        }, function (response) {
		       	 ctrl.performanceSummaryAppStatus = ctrl.messageLoadFail;
		        });
			};  

			//keep together  
		 

			ctrl.reset = function(form) {
				if (form) {
					form.$setPristine();
					form.$setUntouched();
				}
		 		ctrl.resetForm();
			};

			ctrl.loadForm();
			
			//keep together 
			
			
			
			
			ctrl.saveAsPDF = function() {
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
			

		}]);


function setFromDropdown(list,selectedItem){
	  for (var i=0; i <  list.length; i++){
	    	 if (list[i].value === selectedItem){
	    		 selectedItem = list[i];
	    		 break;
	    	 }
	  }
	  return selectedItem;
}

function setFromDropdownByLabel(list,selectedItem){
	  for (var i=0; i <  list.length; i++){
	    	 if (list[i].label === selectedItem){
	    		 selectedItem = list[i];
	    		 break;
	    	 }
	  }
	  return selectedItem;
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
 
