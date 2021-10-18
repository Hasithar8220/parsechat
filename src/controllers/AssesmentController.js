 angular.module('app').controller("AssesmentController", function ($scope,$http) {

    
     $scope.chat={};
     $scope.btnupdateTxt='';
     $scope.chat.msg='';

     $scope.split = function (){

        $scope.btnupdateTxt='Saving...';
        $http.post("/api/chat/split", JSON.stringify($scope.chat)).then(function (response) {
            console.log(response);  
            if(response){
                $scope.btnupdateTxt='Parsing Completed';
                $scope.result=JSON.stringify(response.data);
            }     
        });
   
    }
    
    


 });